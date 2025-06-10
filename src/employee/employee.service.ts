import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { SendMailOptions } from "nodemailer";
import { first } from "rxjs";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { HospitalDocument } from "src/DB/schemas/hospital/hospital.schema";

@Injectable()
export class EmployeeService {
  constructor(
    private readonly employeeRepoService: EmployeeRepoService,
    private readonly logger: Logger,
    private readonly event: EventEmitter2
  ) {}
  //====================== addSingleEmployee ===========================
  /**
   * Adds a single employee to the hospital
   * @param employeeData - Partial data of the employee to be added
   * @param hospital - The hospital to which the employee belongs
   * @param employee - The employee performing the action
   * @returns A message indicating success and the added employee data
   * @throws InternalServerErrorException if an error occurs during the process
   * @throws ConflictException if the email is already registered
   * @throws UnauthorizedException if the employee does not belong to the hospital
   */
  async addSingleEmployee(
    employeeData: Partial<EmployeeDocument>,
    hospital: HospitalDocument,
    employee: EmployeeDocument
  ) {
    try {
      if (!employee.hospital.equals(hospital._id)) {
        throw new UnauthorizedException("Unauthorized action");
      }
      const addedEmployee = (await this.employeeRepoService.create({
        ...employeeData,
        hospital: hospital._id,
        createdBy: employee._id,
        isEmailConfirmed: true,
      })) as EmployeeDocument;
      this.logger.log(
        `[Employee Service] Employee ${addedEmployee._id} added successfully by ${employee._id}`
      );
      const options: SendMailOptions = {
        to: addedEmployee.email,
        subject: "Login Credentials",
        html: `<p>Dear ${addedEmployee.firstName},</p>
            <p>Your account has been created successfully. Here are your login credentials:</p>
            <p>Email: ${addedEmployee.email}</p>
            <p>Password: ${employeeData.password}</p>
            <p>Please log in to your account and change your password.</p>
            <p>Thank you!</p>`,
      };
      this.event.emit("sendEmail", options);
      return { message: "success", employee: addedEmployee };
    } catch (error) {
      this.logger.error(
        `[Employee Service] Error adding employee: ${error.message}`,
        error.stack
      );
      if (error.errorResponse?.code === 11000) {
        throw new ConflictException("Email already registered");
      }
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new InternalServerErrorException("Failed to add employee");
    }
  }
  //====================== addEmployees ===========================
  /**
   * Adds multiple employees to the hospital
   * @param employees - Array of partial employee data to be added
   * @param hospital - The hospital to which the employees belong
   * @param employee - The employee performing the action
   * @returns A message indicating success and the number of employees added
   * @throws InternalServerErrorException if an error occurs during the process
   * @throws ConflictException if one or more emails are already registered
   * @throws UnauthorizedException if the employee does not belong to the hospital
   */
  async addEmployees(
    employees: Partial<EmployeeDocument>[],
    hospital: HospitalDocument,
    employee: EmployeeDocument
  ) {
    try {
      if (!employee.hospital.equals(hospital._id)) {
        throw new UnauthorizedException("Unauthorized action");
      }
      for (const emp of employees) {
        emp.hospital = hospital._id;
        emp.createdBy = employee._id;
        emp.isEmailConfirmed = true;
      }
      const addedEmployees = (await this.employeeRepoService.create(
        employees
      )) as EmployeeDocument[];
      if (addedEmployees.length === 0) {
        throw new BadRequestException("No employees were added");
      }
      for (const emp of addedEmployees) {
        const options: SendMailOptions = {
          to: emp.email,
          subject: "Login Credentials",
          html: `<p>Dear ${emp.firstName},</p>
                        <p>Your account has been created successfully. Here are your login credentials:</p>
                        <p>Email: ${emp.email}</p>
                        <p>Password: ${emp.password}</p>
                        <p>Please log in to your account and change your password.</p>
                        <p>Thank you!</p>`,
        };
        this.event.emit("sendEmail", options);
      }
      this.logger.log(
        `[Employee Service] ${addedEmployees.length} employees added successfully by ${employee._id}`
      );
      return { message: "success", employeesAdded: addedEmployees.length };
    } catch (error) {
      this.logger.error(
        `[Employee Service] Error adding employees: ${error.message}`,
        error.stack
      );
      if (error.errorResponse?.code === 11000) {
        throw new ConflictException("One or more emails already registered");
      }
      if (
        error instanceof BadRequestException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      }
      throw new InternalServerErrorException("Failed to add employees");
    }
  }
  //==================== getEmployeeById =========================
  /**
   * Fetches an employee by ID
   * @param employeeId - The ID of the employee to fetch
   * @param hospital - The hospital to which the employee belongs
   * @param employee - The employee performing the action
   * @returns An object containing a success message and the employee data
   * @throws UnauthorizedException if the employee does not belong to the hospital
   * @throws NotFoundException if the employee is not found
   * @throws InternalServerErrorException if an error occurs during the process
   */
  async getEmployeeById(
    employeeId: string,
    hospital: HospitalDocument,
    employee: EmployeeDocument
  ) {
    try {
      if (!employee.hospital.equals(hospital._id)) {
        throw new UnauthorizedException("Unauthorized action");
      }
      const emp = await this.employeeRepoService.findOne(
        {
          _id: employeeId,
          hospital: hospital._id,
        },
        { password: 0, otp: 0, otpExpireAt: 0, otpFor: 0 }
      );
      if (!emp) {
        throw new NotFoundException("Employee not found");
      }
      return { message: "success", employee: emp };
    } catch (error) {
      this.logger.error(
        `[Employee Service] Error fetching employee by ID: ${error.message}`,
        error.stack
      );
      if (
        error instanceof NotFoundException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      }

      throw new InternalServerErrorException("Failed to fetch employee");
    }
  }
  //==================== getAllEmployees =========================
  /**
   * Fetches all employees of a hospital
   * @param hospital - The hospital to which the employees belong
   * @param employee - The employee performing the action
   * @param limit - The maximum number of employees to fetch (default is 10)
   * @param page - The page number for pagination (default is 1)
   * @returns An object containing a success message, list of employees, total count, total pages, and current page
   * @throws UnauthorizedException if the employee does not belong to the hospital
   * @throws NotFoundException if no employees are found
   * @throws InternalServerErrorException if an error occurs during the process
   */
  async getAllEmployees(
    hospital: HospitalDocument,
    employee: EmployeeDocument,
    limit: number = 10,
    page: number = 1
  ) {
    try {
      if (!employee.hospital.equals(hospital._id)) {
        throw new UnauthorizedException("Unauthorized action");
      }
      const skip = (page - 1) * limit;
      const employees = await this.employeeRepoService.findAll(
        {
          hospital: hospital._id,
        },
        { password: 0, otp: 0, otpExpireAt: 0, otpFor: 0 },
        skip,
        limit
      );
      if (employees.length === 0) {
        throw new NotFoundException("No employees found");
      }
      const totalCount = await this.employeeRepoService.count({
        hospital: hospital._id,
      });
      return {
        message: "success",
        employees,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
        currentPage: page,
      };
    } catch (error) {
      this.logger.error(
        `[Employee Service] Error fetching all employees: ${error.message}`,
        error.stack
      );
      if (
        error instanceof NotFoundException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      }
      throw new InternalServerErrorException("Failed to fetch employees");
    }
  }
  //=================== getOwnEmployeeData========================
  /**
   * Fetches the data of the employee performing the action
   * @param employee - The employee whose data is to be fetched
   * @param hospital - The hospital to which the employee belongs
   * @returns An object containing a success message and the employee's data
   * @throws UnauthorizedException if the employee does not belong to the hospital
   * @throws InternalServerErrorException if an error occurs during the process
   */
  async getOwnEmployeeData(
    employee: EmployeeDocument,
    hospital: HospitalDocument
  ) {
    try {
      if (!employee.hospital.equals(hospital._id)) {
        throw new UnauthorizedException("Unauthorized action");
      }
      return {
        message: "success",
        employee: {
          firstName: employee.firstName,
          lastName: employee.lastName,
          email: employee.email,
          phone: employee.phone,
          occupation: employee.occupation,
          DOB: employee.DOB,
          isEmailConfirmed: employee.isEmailConfirmed,
        },
      };
    } catch (error) {
      this.logger.error(
        `[Employee Service] Error fetching own employee data: ${error.message}`,
        error.stack
      );
      throw new InternalServerErrorException("Failed to fetch employee data");
    }
  }
  //===================== deleteEmployee =========================
  /**
   * Deletes an employee by ID
   * @param employeeId - The ID of the employee to delete
   * @param hospital - The hospital to which the employee belongs
   * @param employee - The employee performing the action
   * @returns An object containing a success message and the deleted employee ID
   * @throws UnauthorizedException if the employee does not belong to the hospital
   * @throws NotFoundException if the employee is not found
   * @throws InternalServerErrorException if an error occurs during the process
   */
  async deleteEmployee(
    employeeId: string,
    hospital: HospitalDocument,
    employee: EmployeeDocument
  ) {
    try {
      if (!employee.hospital.equals(hospital._id)) {
        throw new UnauthorizedException("Unauthorized action");
      }
      const emp = await this.employeeRepoService.findOne({
        _id: employeeId,
        hospital: hospital._id,
        isFreezed: { $exists: false },
      });
      if (!emp) {
        throw new NotFoundException("Employee not found or freezed");
      }
      await this.employeeRepoService.deleteOne({ _id: employeeId });
      this.logger.log(
        `[Employee Service] Employee ${employeeId} deleted successfully by ${employee._id}`
      );
      return { message: "success", employeeId };
    } catch (error) {
      this.logger.error(
        `[Employee Service] Error deleting employee: ${error.message}`,
        error.stack
      );
      if (
        error instanceof NotFoundException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      }
      throw new InternalServerErrorException("Failed to delete employee");
    }
  }
  //===================== freezeEmployee =========================
  /**
   * Freezes an employee by ID
   * @param employeeId - The ID of the employee to freeze
   * @param hospital - The hospital to which the employee belongs
   * @param employee - The employee performing the action
   * @returns An object containing a success message and the frozen employee ID
   * @throws UnauthorizedException if the employee does not belong to the hospital
   * @throws NotFoundException if the employee is not found or already freezed
   * @throws InternalServerErrorException if an error occurs during the process
   */
  async freezeEmployee(
    employeeId: string,
    hospital: HospitalDocument,
    employee: EmployeeDocument
  ) {
    try {
      if (!employee.hospital.equals(hospital._id)) {
        throw new UnauthorizedException("Unauthorized action");
      }
      const emp = await this.employeeRepoService.findOne({
        _id: employeeId,
        hospital: hospital._id,
        isFreezed: { $exists: false },
      });
      if (!emp) {
        throw new NotFoundException("Employee not found/freezed");
      }
      await this.employeeRepoService.updateOne(
        { _id: employeeId },
        { isFreezed: true }
      );
      this.logger.log(
        `[Employee Service] Employee ${employeeId} freezed successfully by ${employee._id}`
      );
      return { message: "success", employeeId };
    } catch (error) {
      this.logger.error(
        `[Employee Service] Error freezing employee: ${error.message}`,
        error.stack
      );
      if (
        error instanceof NotFoundException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      }
      throw new InternalServerErrorException("Failed to freeze employee");
    }
  }
  //===================== unfreezeEmployee =========================
  /**
   * Unfreezes an employee by ID
   * @param employeeId - The ID of the employee to unfreeze
   * @param hospital - The hospital to which the employee belongs
   * @param employee - The employee performing the action
   * @returns An object containing a success message and the unfrozen employee ID
   * @throws UnauthorizedException if the employee does not belong to the hospital
   * @throws NotFoundException if the employee is not found or not freezed
   * @throws InternalServerErrorException if an error occurs during the process
   */
  async unfreezeEmployee(
    employeeId: string,
    hospital: HospitalDocument,
    employee: EmployeeDocument
  ) {
    try {
      if (!employee.hospital.equals(hospital._id)) {
        throw new UnauthorizedException("Unauthorized action");
      }
      const emp = await this.employeeRepoService.findOne({
        _id: employeeId,
        hospital: hospital._id,
        isFreezed: true,
      });
      if (!emp) {
        throw new NotFoundException("Employee not found or not freezed");
      }
      await this.employeeRepoService.updateOne(
        { _id: employeeId },
        { $unset : {isFreezed: 1} }
      );
      this.logger.log(
        `[Employee Service] Employee ${employeeId} unfrozen successfully by ${employee._id}`
      );
      return { message: "success", employeeId };
    } catch (error) {
      this.logger.error(
        `[Employee Service] Error unfreezing employee: ${error.message}`,
        error.stack
      );
      if (
        error instanceof NotFoundException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      }
      throw new InternalServerErrorException("Failed to unfreeze employee");
    }
  }
}
