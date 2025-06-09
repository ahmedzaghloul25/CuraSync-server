import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from "@nestjs/common";
import { DepartmentService } from "./department.service";
import { AuthenticationGuard, AuthorizationGuard } from "common/guards";
import { Employee, Roles } from "common/decorators";
import { AddDepartmentDto, UpdateDepartmentDto } from "./DTO";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { HospitalValidation } from "common/pipes";
import { HospitalDocument } from "src/DB/schemas/hospital/hospital.schema";
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from "@nestjs/swagger";
import { ParseObjectIdPipe } from "@nestjs/mongoose";
import { AdminRoles } from "common/types/roles";

@ApiTags("Departments")
@Controller({ version: "1", path: "hospitals/:hospitalId/departments" })
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  @HttpCode(201)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(AdminRoles.HOSPITAL_ADMINISTRATOR)
  @ApiParam({ name: "hospitalId", description: "Hospital ID" })
  @ApiOperation({ summary: "Create new department" })
  @ApiResponse({
    status: 201,
    description: "Department created successfully",
  })
  addDepartment(
    @Body() body: AddDepartmentDto,
    @Employee() employee: EmployeeDocument,
    @Param("hospitalId", HospitalValidation) hospital: HospitalDocument
  ) {
    return this.departmentService.addDepartment(body, employee, hospital);
  }

  @Put(":departmentId")
  @HttpCode(200)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(AdminRoles.HOSPITAL_ADMINISTRATOR)
  @ApiOperation({ summary: "Update department head" })
  @ApiParam({ name: "hospitalId", description: "Hospital ID" })
  @ApiParam({ name: "departmentId", description: "Department ID" })
  @ApiResponse({
    status: 200,
    description: "Department updated successfully",
  })
  updateDepartment(
    @Param("departmentId", ParseObjectIdPipe) departmentId: string,
    @Body() body: UpdateDepartmentDto,
    @Employee() employee: EmployeeDocument,
    @Param("hospitalId", HospitalValidation) hospital: HospitalDocument
  ) {
    return this.departmentService.updateDepartment(
      { ...body, departmentId },
      employee,
      hospital
    );
  }

  @Get(":departmentId")
  @HttpCode(200)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(...Object.values(AdminRoles))
  @ApiOperation({ summary: "Get department by ID" })
  @ApiResponse({
    status: 200,
    description: "Department retrieved successfully",
  })
  @ApiParam({ name: "hospitalId", description: "Hospital ID" })
  @ApiParam({ name: "departmentId", description: "Department ID" })
  getDepartment(
    @Param("departmentId", ParseObjectIdPipe) departmentId: string,
    @Employee() employee: EmployeeDocument,
    @Param("hospitalId", HospitalValidation) hospital: HospitalDocument
  ) {
    return this.departmentService.getDepartment(
      departmentId,
      employee,
      hospital
    );
  }

  @Get()
  @HttpCode(200)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(...Object.values(AdminRoles))
  @ApiParam({ name: "hospitalId", description: "Hospital ID" })
  @ApiOperation({ summary: "Get all departments with pagination" })
  @ApiResponse({
    status: 200,
    description: "Departments retrieved successfully",
  })
  getAllDepartments(
    @Query("page") page = 1,
    @Query("limit") limit = 10,
    @Employee() employee: EmployeeDocument,
    @Param("hospitalId", HospitalValidation) hospital: HospitalDocument
  ) {
    return this.departmentService.getAllDepartments(
      hospital,
      employee,
      page,
      limit
    );
  }
}
