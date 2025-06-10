import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthenticationGuard, AuthorizationGuard } from "common/guards";
import { Employee, Roles } from "common/decorators";
import { HRRoles } from "common/types/roles";
import { HospitalValidation } from "common/pipes";
import { HospitalDocument } from "src/DB/schemas/hospital/hospital.schema";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { AddSingleEmployeeDto } from "./DTO/addSingleEmployeeDto";
import { ParseObjectIdPipe } from "@nestjs/mongoose";

@ApiTags("Employees")
@Controller({ version: "1", path: "hospitals/:hospitalId/employees" })
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post("add-one")
  @HttpCode(201)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(...Object.values(HRRoles))
  @ApiOperation({ summary: "Add a single employee to the hospital" })
  @ApiResponse({
    status: 201,
    description: "Employee added successfully",
  })
  addSingleEmployee(
    @Body() Body: AddSingleEmployeeDto,
    @Param("hospitalId", HospitalValidation) hospital: HospitalDocument,
    @Employee() employee: EmployeeDocument
  ) {
    return this.employeeService.addSingleEmployee(Body, hospital, employee);
  }

  @Post("add-bulk")
  @HttpCode(201)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(...Object.values(HRRoles))
  @ApiOperation({ summary: "Add multiple employees to the hospital" })
  @ApiResponse({
    status: 201,
    description: "Employees added successfully",
  })
  addMultipleEmployees(
    @Body() Body: AddSingleEmployeeDto[],
    @Param("hospitalId", HospitalValidation) hospital: HospitalDocument,
    @Employee() employee: EmployeeDocument
  ) {
    return this.employeeService.addEmployees(Body, hospital, employee);
  }

  @Get(":employeeId")
  @HttpCode(200)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(...Object.values(HRRoles))
  @ApiOperation({ summary: "Get employee details by ID" })
  @ApiResponse({
    status: 200,
    description: "Employee details retrieved successfully",
  })
  getEmployeeById(
    @Param("employeeId", ParseObjectIdPipe) employeeId: string,
    @Param("hospitalId", HospitalValidation) hospital: HospitalDocument,
    @Employee() employee: EmployeeDocument
  ) {
    return this.employeeService.getEmployeeById(employeeId, hospital, employee);
  }

  @Get()
  @HttpCode(200)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(...Object.values(HRRoles))
  @ApiOperation({ summary: "Get all employees in the hospital" })
  @ApiResponse({
    status: 200,
    description: "List of employees retrieved successfully",
  })
  getAllEmployees(
    @Param("hospitalId", HospitalValidation) hospital: HospitalDocument,
    @Employee() employee: EmployeeDocument,
    @Query() limit: number,
    @Query() page: number
  ) {
    return this.employeeService.getAllEmployees(
      hospital,
      employee,
      limit,
      page
    );
  }

  @Get("me")
  @HttpCode(200)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @ApiOperation({ summary: "Get current employee details" })
  @ApiResponse({
    status: 200,
    description: "Current employee details retrieved successfully",
  })
  getCurrentEmployee(
    @Employee() employee: EmployeeDocument,
    @Param("hospitalId", HospitalValidation) hospital: HospitalDocument
  ) {
    return this.employeeService.getOwnEmployeeData(employee, hospital);
  }

  @Delete(":employeeId")
  @HttpCode(200)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(...Object.values(HRRoles))
  @ApiOperation({ summary: "Delete an employee by ID" })
  @ApiResponse({
    status: 200,
    description: "Employee deleted successfully",
  })
  deleteEmployee(
    @Param("employeeId", ParseObjectIdPipe) employeeId: string,
    @Param("hospitalId", HospitalValidation) hospital: HospitalDocument,
    @Employee() employee: EmployeeDocument
  ) {
    return this.employeeService.deleteEmployee(employeeId, hospital, employee);
  }

  @Put(":employeeId")
  @HttpCode(200)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(...Object.values(HRRoles))
  @ApiOperation({ summary: "freeze employee account details by ID" })
  @ApiResponse({
    status: 200,
    description: "Employee account frozen successfully",
  })
  freezeEmployee(
    @Param("employeeId", ParseObjectIdPipe) employeeId: string,
    @Param("hospitalId", HospitalValidation) hospital: HospitalDocument,
    @Employee() employee: EmployeeDocument
  ) {
    return this.employeeService.freezeEmployee(employeeId, hospital, employee);
  }

  @Put(":employeeId/unfreeze")
  @HttpCode(200)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(...Object.values(HRRoles))
  @ApiOperation({ summary: "unfreeze employee account by ID" })
  @ApiResponse({
    status: 200,
    description: "Employee account unfrozen successfully",
  })
  unfreezeEmployee(
    @Param("employeeId", ParseObjectIdPipe) employeeId: string,
    @Param("hospitalId", HospitalValidation) hospital: HospitalDocument,
    @Employee() employee: EmployeeDocument
  ) {
    return this.employeeService.unfreezeEmployee(
      employeeId,
      hospital,
      employee
    );
  }
}
