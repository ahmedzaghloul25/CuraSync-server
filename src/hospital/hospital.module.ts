import { Logger, Module } from "@nestjs/common";
import { HospitalController } from "./hospital.controller";
import { HospitalService } from "./hospital.service";
import HospitalRepoService from "src/DB/repository/hospital/hospital.repoService";
import { FileUploader } from "common/services";
import { hospitalModule } from "src/DB/schemas/hospital/hospital.schema";
import { JwtToken } from "common/services/jwtToken";
import { JwtService } from "@nestjs/jwt";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";
import { AuthenticationGuard } from "common/guards/authentication.guard";
import { AuthorizationGuard } from "common/guards/authorization.guard";
import { Employee, EmployeeModule } from "src/DB/schemas/hospital/hospital.employee.schema";

@Module({
  imports: [EmployeeModule, hospitalModule],
  controllers: [HospitalController],
  providers: [
    JwtToken,
    JwtService,
    EmployeeRepoService,
    HospitalService,
    HospitalRepoService,
    FileUploader,
    Logger
  ],
})
export class HospitalModule {}
