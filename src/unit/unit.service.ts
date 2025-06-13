import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { UnitCatalogRepoService } from "src/DB/repository/catalog";
import HospitalUnitRepoService from "src/DB/repository/hospital/hospital.unit.repoService";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { AddNewUnitDto, UpdateUnitDto } from "./DTO";
import { EnrichedDepartmentDoc } from "common/types";
import { PopulatedDoc, Types } from "mongoose";

@Injectable()
export class UnitService {
  constructor(
    private readonly hospitalUnitRepoService: HospitalUnitRepoService,
    private readonly unitCatalogRepoService: UnitCatalogRepoService,
    private readonly logger: Logger
  ) {}
  //======================= addNewUnit ========================
  /**
   * add new Unit in a specific DEpartment in Hospital
   * @param department - Department that a unit will be added into
   * @param employee - employee who perform the adding action
   * @param body - object containing ID for Unit catalog and total bed count
   * @returns  object containing success message and added unit
   * @throws  ConflictException in case of duplication
   * @throws  UnauthorizedException if employee does not belong to Hospital
   * @throws  UnauthorizedException if department name is not equal to department name in unit catalog
   * @throws  NotFoundException if unit catalog not found
   * @throws  InternalServerErrorException if failed to add unit
   */

  async addNewUnit(
    department: EnrichedDepartmentDoc,
    employee: EmployeeDocument,
    body: AddNewUnitDto
  ) {
    try {
      if (employee.hospital !== department.hospital) {
        throw new UnauthorizedException("Unauthorized action");
      }
      const unitCatalog = await this.unitCatalogRepoService.findOne({
        _id: body.unitCatalogId,
      });
      if (!unitCatalog) {
        throw new NotFoundException("Unit catalog not found");
      }
      if (department.department.slug !== unitCatalog.departmentSlug) {
        throw new UnauthorizedException(
          "Unit does not belong to this department"
        );
      }
      const unit = await this.hospitalUnitRepoService.create({
        ...body,
        availableBedCount: body.totalBedCount,
        department: department._id,
        createdBy: employee._id,
      });
      this.logger.log(
        `[Unit Service] new unit added for department ${department._id} in hospital ${department.hospital}`
      );
      return { message: "success", unit };
    } catch (error) {
      this.logger.error(
        `[Unit Service] error adding new unit for department ${department._id} in hospital ${department.hospital}`,
        error.stack
      );
      if (error.code === 11000) {
        throw new ConflictException(`unit already exists in this department`);
      }
      if (
        error instanceof NotFoundException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      }
      throw new InternalServerErrorException("Failed to add new unit");
    }
  }
  //=========================== updateUnit ===============================
  /**
   * update total bed count in a unit
   * @param unitId - the ID of the unit to be updated
   * @param body - object containing new total bed count
   * @param employee - the employee performing the update
   * @returns object containing success message and updated unit ID
   * @throws BadRequestException in case of invalid ID
   * @throws UnauthorizedException in case of employee hospital ID not equal to Hospital ID in unit's department
   * @throws InternalServerErrorException if failed to update unit
   */
  async updateUnit(
    department: EnrichedDepartmentDoc,
    unitId: Types.ObjectId,
    body: UpdateUnitDto,
    employee: EmployeeDocument
  ) {
    try {
      const unit = await this.hospitalUnitRepoService.findById(unitId);
      if (!unit) {
        throw new BadRequestException("Invalid unit ID");
      }
      if (
        !unit.department.equals(department._id) ||
        !department.hospital.equals(employee.hospital)
      ) {
        throw new UnauthorizedException("Unauthorized action");
      }
      await this.hospitalUnitRepoService.updateOne(
        { _id: unit._id },
        { totalBedCount: body.totalBedCount, modifiedBy: employee._id }
      );
      this.logger.log(
        `[Unit Service] total bed count changed for unit ${unit._id} in hospital ${department.hospital}`
      );
      return { message: "success", unitId: unit._id };
    } catch (error) {
      this.logger.error(
        `[Unit Service] error updating unit ${error.message}`,
        error.stack
      );
      if (
        error instanceof BadRequestException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      }
      throw new InternalServerErrorException("Failed to update unit");
    }
  }
  //=========================== freezeUnit ===============================
  /**
   * freeze a unit and disables actions on it
   * @param unitId - the ID of unit to be freezed
   * @param employee - the employee performing the freeze action
   * @returns object containing success message and unit ID
   * @throws BadRequestException in case of invalid ID
   * @throws UnauthorizedException in case of employee hospital ID not equal to Hospital ID in unit's department
   * @throws InternalServerErrorException if failed to freeze unit
   */
  async freezeUnit(
    department: EnrichedDepartmentDoc,
    unitId: Types.ObjectId,
    employee: EmployeeDocument
  ) {
    try {
      const unit = await this.hospitalUnitRepoService.findById(unitId);
      if (!unit) {
        throw new BadRequestException("Invalid unit ID");
      }
      if (
        !unit.department.equals(department._id) ||
        !department.hospital.equals(employee._id)
      ) {
        throw new UnauthorizedException("Unauthorized action");
      }
      await this.hospitalUnitRepoService.updateOne(
        { _id: unit._id },
        { isFreezed: true, freezedBy: employee._id }
      );
      this.logger.log(
        `[Unit Service] unit ${unit._id} in hospital ${department.hospital} has been freezed`
      );
      return { message: "success", unit: unit._id };
    } catch (error) {
      this.logger.error(
        `[Unit Service] error freezing unit ${error.message}`,
        error.stack
      );
      if (
        error instanceof BadRequestException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      }
      throw new InternalServerErrorException("Failed to freeze unit");
    }
  }
  //========================== unfreezeUnit ===================================
  /**
   * unfreeze a unit and enable actions on it
   * @param unitId - the ID of unit to be un-freezed
   * @param employee - the employee performing the unfreeze action
   * @returns object containing success message and unit ID
   * @throws BadRequestException in case of invalid ID
   * @throws UnauthorizedException in case of employee hospital ID not equal to Hospital ID in unit's department
   * @throws InternalServerErrorException if failed to unfreeze unit
   */
  async unFreezeUnit(
    department: EnrichedDepartmentDoc,
    unitId: Types.ObjectId,
    employee: EmployeeDocument
  ) {
    try {
      const unit = await this.hospitalUnitRepoService.findOne({
        _id: unitId,
        isFreezed: true,
      });
      if (!unit) {
        throw new BadRequestException("Invalid unit ID");
      }
      if (
        !unit.department.equals(department._id) ||
        !department.hospital.equals(employee._id)
      ) {
        throw new UnauthorizedException("Unauthorized action");
      }
      await this.hospitalUnitRepoService.updateOne(
        { _id: unit._id },
        { $unset: { isFreezed: "", freezedBy: "" }, modifiedBy: employee._id }
      );
      this.logger.log(
        `[Unit Service] unit ${unit._id} in hospital ${department.hospital} has been unFreezed`
      );
      return { message: "success", unit: unit._id };
    } catch (error) {
      this.logger.error(
        `[Unit Service] error unfreezing unit ${error.message}`,
        error.stack
      );
      if (
        error instanceof BadRequestException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      }
      throw new InternalServerErrorException("Failed to unfreeze unit");
    }
  }
  //========================== getUnitDetails =================================
  /**
   * get unit details by ID
   * @param unitId - the ID of unit
   * @param employee - the employee querying the unit data
   * @returns object containing success message and unit data
   * @throws BadRequestException in case of invalid ID
   * @throws UnauthorizedException in case of employee hospital ID not equal to Hospital ID in unit's department
   * @throws InternalServerErrorException if failed to get details
   */
  async getUnitDetails(
    department: EnrichedDepartmentDoc,
    unitId: Types.ObjectId,
    employee: EmployeeDocument
  ) {
    try {
      const unit = await this.hospitalUnitRepoService.findById(unitId);
      if (!unit) {
        throw new BadRequestException("Invalid unit ID");
      }
      if (
        !unit.department.equals(department._id) ||
        !department.hospital.equals(employee._id)
      ) {
        throw new UnauthorizedException("Unauthorized action");
      }
      return { message: "success", unit };
    } catch (error) {
      this.logger.error(
        `[Unit Service] error getting unit details. ${error.message}`,
        error.stack
      );
      if (
        error instanceof BadRequestException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      }
      throw new InternalServerErrorException("Failed to get unit details");
    }
  }
  //====================== getAllUnits ==================================
  /**
   * get all units within a single Department
   * @param departmentId - the ID of the department
   * @param employee - the employee performing the query
   * @param page - page number (default: 1)
   * @param limit - limit per page (default: 10, max: 100)
   * @returns object containing success message, units and pagination info
   * @throws BadRequestException for invalid input parameters
   * @throws NotFoundException in case of units not found
   * @throws UnauthorizedException in case of employee hospital ID not equal to Hospital ID in unit's department
   * @throws InternalServerErrorException if failed to get units
   */
  async getAllUnits(
    department: EnrichedDepartmentDoc,
    employee: EmployeeDocument,
    page: number = 1,
    limit: number = 10
  ) {
    try {
      if (page < 1 || limit < 1 || limit > 100) {
        throw new BadRequestException("Invalid pagination parameters");
      }
      if (!department.hospital.equals(employee.hospital)) {
        throw new UnauthorizedException("Unauthorized action");
      }
      const skip = (page - 1) * limit;
      const [units, totalCount] = await Promise.all([
        this.hospitalUnitRepoService.findAll(
          { department: department._id },
          {},
          skip,
          limit
        ),
        this.hospitalUnitRepoService.count({ department: department._id }),
      ]);
      if (units.length === 0) {
        throw new NotFoundException("No units found in this department");
      }
      return {
        message: "success",
        data: {
          units,
          pagination: {
            total: totalCount,
            page,
            limit,
            pages: Math.ceil(totalCount / limit),
          },
        },
      };
    } catch (error) {
      this.logger.error(
        `[Units Service] Error getting all units for department ${department._id}: ${error.message}`,
        error.stack
      );
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      }
      throw new InternalServerErrorException("Failed to fetch units");
    }
  }
}