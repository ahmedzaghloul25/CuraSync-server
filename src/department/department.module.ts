import { Logger, Module } from "@nestjs/common";
import { DepartmentController } from "./department.controller";
import { DepartmentService } from "./department.service";
import { HospitalDepartmentModule } from "src/DB/schemas/hospital/hospital.department.schema";
import HospitalDepartmentRepoService from "src/DB/repository/hospital/hospital.dep.repoService";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";
import { employeeModule } from "src/DB/schemas/hospital/hospital.employee.schema";
import { DbResolverModule } from "common/modules";
import { JwtToken } from "common/services";
import { JwtService } from "@nestjs/jwt";
import HospitalRepoService from "src/DB/repository/hospital/hospital.repoService";
import { hospitalModule } from "src/DB/schemas/hospital/hospital.schema";

@Module({
  imports: [HospitalDepartmentModule, employeeModule, DbResolverModule, hospitalModule],
  controllers: [DepartmentController],
  providers: [
    DepartmentService,
    HospitalDepartmentRepoService,
    EmployeeRepoService,
    Logger,
    JwtToken,
    JwtService,
    HospitalRepoService
  ],
})
export class DepartmentModule {}
