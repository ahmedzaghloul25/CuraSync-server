import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { HospitalDocument } from "src/DB/schemas/hospital/hospital.schema";
import { AddDepartmentDto, UpdateDepartmentDto } from "./DTO";
import { DepartmentCatalogRepoService } from "src/DB/repository/catalog";
import HospitalDepartmentRepoService from "src/DB/repository/hospital/hospital.dep.repoService";
import { Types } from "mongoose";
import { HospitalDepartmentDocument } from "src/DB/schemas/hospital/hospital.department.schema";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";
import { CrossDbResolverService } from "common/services/databaseIdResolver";

@Injectable()
export class DepartmentService {
  constructor(
    private readonly departmentCatalog: DepartmentCatalogRepoService,
    private readonly hospitalDepartmentRepoService: HospitalDepartmentRepoService,
    private readonly employeeRepoService: EmployeeRepoService,
    private readonly crossDbResolverService: CrossDbResolverService,
    private readonly logger: Logger
  ) {}
  //=================== addDepartment ======================
  /**
   * Creates a new department in a hospital
   * @param body - The department creation data including catalogId and head
   * @param employee - The employee creating the department
   * @param hospital - The hospital where the department will be created
   * @returns Object containing success message and created department
   * @throws NotFoundException if department catalog not found
   * @throws UnauthorizedException if employee is not authorized
   * @throws ConflictException if department already exists
   */
  async addDepartment(
    body: AddDepartmentDto,
    employee: EmployeeDocument,
    hospital: HospitalDocument
  ) {
    try {
      const departmentCatalog = await this.departmentCatalog.findOne({
        _id: body.catalogId,
      });
      if (!departmentCatalog) {
        throw new NotFoundException(`Department catalog not found`);
      }
      if (!hospital.createdBy.equals(employee._id)) {
        throw new UnauthorizedException(
          `You are not authorized to add a department to this hospital`
        );
      }
      const departmentHead = await this.employeeRepoService.findOne({
        _id: body.head,
      });
      if (!departmentHead || !departmentHead.hospital.equals(hospital._id)) {
        throw new UnauthorizedException(`Department head not found`);
      }
      const newDepartment = (await this.hospitalDepartmentRepoService.create({
        departmentCatalogId: departmentCatalog._id,
        head: new Types.ObjectId(body.head),
        hospital: hospital._id,
        createdBy: employee._id,
      })) as HospitalDepartmentDocument;
      this.logger.log(
        `[Hospital Department] New department created with ID: ${newDepartment._id} in hospital: ${hospital._id}`
      );
      return {
        message: "success",
        department: {
          name: departmentCatalog.name,
          catalogId: departmentCatalog._id,
          head: departmentHead._id,
          hospital: hospital._id,
          createdBy: employee._id,
          _id: newDepartment._id,
        },
      };
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException(
          `Department already exists in this hospital`
        );
      }
      if (
        error instanceof NotFoundException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      } else {
        this.logger.error(
          `[Hospital Department] Error creating department: ${error.message}`,
          error.stack
        );
        throw new InternalServerErrorException("Failed to create department");
      }
    }
  }
  //=================== updateDepartment ======================
  /**
   * Updates the head of a department in a hospital
   * @param body - The update data including departmentId and newHead
   * @param employee - The employee updating the department
   * @param hospital - The hospital where the department exists
   * @returns Object containing success message
   * @throws NotFoundException if department or new head not found
   * @throws UnauthorizedException if employee is not authorized
   * @throws InternalServerErrorException for other errors
   */
  async updateDepartment(
    body: UpdateDepartmentDto,
    employee: EmployeeDocument,
    hospital: HospitalDocument
  ) {
    try {
      if (!employee.hospital.equals(hospital._id)) {
        throw new UnauthorizedException(
          `You are not authorized to update this department`
        );
      }
      const department = await this.hospitalDepartmentRepoService.findOne({
        _id: body.departmentId,
        hospital: hospital._id,
        isDeleted: false,
      });
      if (!department) {
        throw new NotFoundException(`Department not found`);
      }
      const newHead = await this.employeeRepoService.findOne({
        _id: body.newHead,
        hospital: hospital._id,
      });
      if (!newHead) {
        throw new NotFoundException(`New department head not found`);
      }
      // Check if new head is same as current head
      if (department.head.equals(newHead._id)) {
        return {
          message: "success",
          info: "Department head unchanged",
        };
      }
      await this.hospitalDepartmentRepoService.updateOne(
        { _id: department._id },
        { head: newHead._id }
      );
      this.logger.log(
        `[Hospital Department] Department ${department._id} updated with new head: ${newHead._id}`
      );
      return {
        message: "success",
        department: {
          _id: department._id,
          previousHead: department.head,
          newHead: newHead._id,
        },
      };
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      } else {
        this.logger.error(
          `[Hospital Department] Error updating department: ${error.message}`,
          error.stack
        );
        throw new InternalServerErrorException("Failed to update department");
      }
    }
  }
  //=================== getDepartment ======================
  /**
   * get a specific department by its ID
   * @param departmentId - the ID of the department to retrieve
   * @param employee - the employee requesting the department
   * @param hospital - the hospital to which the department belongs
   * @throws NotFoundException if the department does not exist
   * @throws InternalServerErrorException for other errors
   * @throws UnauthorizedException if the employee does not belong to the hospital
   * @description This method retrieves a department by its ID, ensuring that the employee belongs to the same hospital.
   * It enriches the department data with additional references before returning it.
   * @returns - An object containing a success message and the enriched department data
   */
  async getDepartment(
    departmentId: string,
    employee: EmployeeDocument,
    hospital: HospitalDocument
  ) {
    try {
      if (!employee.hospital.equals(hospital._id)) {
        throw new UnauthorizedException(
          `You are not authorized to view this department`
        );
      }
      const department = await this.hospitalDepartmentRepoService.findOne({
        _id: departmentId,
        hospital: hospital._id,
        isDeleted: false,
        isConfirmed : true
      });
      if (!department) {
        throw new NotFoundException(`Department not found`);
      }
      const enrichedDepartment =
        await this.crossDbResolverService.enrichReferences(department);
      return {
        message: "success",
        department: enrichedDepartment,
      };
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      }
      this.logger.error(
        `[Hospital Department] Error retrieving department: ${error.message}`,
        error.stack
      );
      throw new InternalServerErrorException("Failed to retrieve department");
    }
  }

  //=================== getAllDepartments ==================
  /**
   * Retrieves all departments for a hospital
   * @param hospital - The hospital to get departments from
   * @param employee - The employee requesting the departments
   * @param page - Page number for pagination (optional)
   * @param limit - Number of items per page (optional)
   * @throws UnauthorizedException if employee not authorized
   * @throws NotFoundException if no departments found
   * @throws InternalServerErrorException for other errors
   * @returns Object containing success message and array of enriched departments
   */
  async getAllDepartments(
    hospital: HospitalDocument, 
    employee: EmployeeDocument,
    page = 1,
    limit = 10
  ) {
    try {
      if(!employee.hospital.equals(hospital._id)){
        throw new UnauthorizedException(
          `Employee from hospital ${employee.hospital} not authorized to view departments in hospital ${hospital._id}`
        );
      }
      const skip = (page - 1) * limit;
      const departments = await this.hospitalDepartmentRepoService.findAll({
        hospital: hospital._id,
        isDeleted: false,
        isConfirmed: true
      },{ skip, limit });
      if(!departments || departments.length === 0){
        throw new NotFoundException(`No departments found in hospital ${hospital._id}`);
      }
      const enrichedDepartments = await Promise.all(
        departments.map(async (department : HospitalDepartmentDocument) => {
          try {
            return await this.crossDbResolverService.enrichReferences(department);
          } catch (error) {
            this.logger.error(
              `[Hospital Department] Error enriching department ${department._id}: ${error.message}`,
              error.stack
            );
            // Return basic department data if enrichment fails
            return department;
          }
        })
      );
      const totalCount = await this.hospitalDepartmentRepoService.count({
        hospital: hospital._id,
        isDeleted: false,
        isConfirmed: true
      });
      return {
        message: "success",
        departments: enrichedDepartments,
        pagination: {
          total: totalCount,
          page,
          limit,
          pages: Math.ceil(totalCount / limit)
        }
      };
    } catch (error) {
      if (error instanceof NotFoundException ||
        error instanceof UnauthorizedException) {
        throw error;
      }
      this.logger.error(
        `[Hospital Department] Error retrieving departments: ${error.message}`,
        error.stack
      );
      throw new InternalServerErrorException("Failed to retrieve departments");
    }
  }
  //================== deleteDepartment ====================
}
