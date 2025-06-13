import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { UnitService } from "./unit.service";
import { AuthenticationGuard, AuthorizationGuard } from "common/guards";
import { Employee, Roles } from "common/decorators";
import { AdminRoles } from "common/types/roles";
import { DepartmentValidation } from "common/pipes/departmentValidation";
import { EnrichedDepartmentDoc } from "common/types";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { AddNewUnitDto, UpdateUnitDto } from "./DTO";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ParseObjectIdPipe } from "@nestjs/mongoose";
import { Types } from "mongoose";

@ApiTags("Units")
@Controller({ version: "1", path: "departments/:departmentId/units" })
export class UnitController {
  constructor(private readonly unitService: UnitService) {}

  @Post()
  @HttpCode(201)
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(AdminRoles.HOSPITAL_ADMINISTRATOR)
  @ApiParam({ name: "departmentId", description: "Department ID" })
  @ApiOperation({ summary: "add new unit" })
  @ApiResponse({
    status: 201,
    description: "unit added successfully",
  })
  addNewUnit(
    @Param("departmentId", DepartmentValidation)
    department: EnrichedDepartmentDoc,
    @Employee() employee: EmployeeDocument,
    @Body() body: AddNewUnitDto
  ) {
    return this.unitService.addNewUnit(department, employee, body);
  }

  @Patch(":unitId")
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(AdminRoles.HOSPITAL_ADMINISTRATOR)
  @ApiOperation({ summary: "update total bed count in a unit" })
  @ApiResponse({
    status: 200,
    description: "unit updated successfully",
  })
  @ApiParam({ name: "departmentId", description: "Department ID" })
  @ApiParam({ name: "unitId", description: "Unit ID" })
  updateUnit(
    @Param("departmentId", DepartmentValidation)
    department: EnrichedDepartmentDoc,
    @Param("unitId", ParseObjectIdPipe) unitId: Types.ObjectId,
    @Body() body: UpdateUnitDto,
    @Employee() employee: EmployeeDocument
  ) {
    return this.unitService.updateUnit(department, unitId, body, employee);
  }

  @Delete("freeze/:unitId")
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(AdminRoles.HOSPITAL_ADMINISTRATOR)
  @ApiOperation({ summary: "freeze a unit" })
  @ApiResponse({
    status: 200,
    description: "unit freezed successfully",
  })
  @ApiParam({ name: "departmentId", description: "Department ID" })
  @ApiParam({ name: "unitId", description: "Unit ID" })
  freezeUnit(
    @Param("departmentId", DepartmentValidation)
    department: EnrichedDepartmentDoc,
    @Param("unitId", ParseObjectIdPipe) unitId: Types.ObjectId,
    @Employee() employee: EmployeeDocument
  ) {
    return this.unitService.freezeUnit(department, unitId, employee);
  }

  @Patch("unfreeze/:unitId")
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(AdminRoles.HOSPITAL_ADMINISTRATOR)
  @ApiOperation({ summary: "unfreeze a unit" })
  @ApiResponse({
    status: 200,
    description: "unit unFreezed successfully",
  })
  @ApiParam({ name: "departmentId", description: "Department ID" })
  @ApiParam({ name: "unitId", description: "Unit ID" })
  unfreezeUnit(
    department: EnrichedDepartmentDoc,
    @Param("unitId", ParseObjectIdPipe) unitId: Types.ObjectId,
    @Employee() employee: EmployeeDocument
  ) {
    return this.unitService.unFreezeUnit(department, unitId, employee);
  }

  @Get(":unitId")
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(AdminRoles.HOSPITAL_ADMINISTRATOR)
  @ApiOperation({ summary: "get unit details by ID" })
  @ApiResponse({
    status: 200,
    description: "unit details fetched successfully",
  })
  @ApiParam({ name: "departmentId", description: "Department ID" })
  @ApiParam({ name: "unitId", description: "Unit ID" })
  getUnitDetails(
    department: EnrichedDepartmentDoc,
    @Param("unitId", ParseObjectIdPipe) unitId: Types.ObjectId,
    @Employee() employee: EmployeeDocument
  ) {
    return this.unitService.getUnitDetails(department, unitId, employee);
  }

  @Get()
  @UseGuards(AuthenticationGuard, AuthorizationGuard)
  @Roles(AdminRoles.HOSPITAL_ADMINISTRATOR)
  @ApiOperation({ summary: "get all units in department" })
  @ApiResponse({
    status: 200,
    description: "units fetched successfully",
  })
  @ApiParam({ name: "departmentId", description: "Department ID" })
  getAllUnits(
    department: EnrichedDepartmentDoc,
    @Employee() employee: EmployeeDocument,
    @Query() page: number = 1,
    @Query() limit: number = 10
  ) {
    return this.unitService.getAllUnits(department, employee, page, limit);
  }
}