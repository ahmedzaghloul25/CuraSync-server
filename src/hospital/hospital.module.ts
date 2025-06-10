import { Logger, Module } from "@nestjs/common";
import { HospitalController } from "./hospital.controller";
import { HospitalService } from "./hospital.service";
import HospitalRepoService from "src/DB/repository/hospital/hospital.repoService";
import { FileUploader, Hashing } from "common/services";
import { hospitalModule } from "src/DB/schemas/hospital/hospital.schema";
import { JwtToken } from "common/services/jwtToken";
import { JwtService } from "@nestjs/jwt";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";
import { employeeModule } from "src/DB/schemas/hospital/hospital.employee.schema";

@Module({
  imports: [employeeModule, hospitalModule],
  controllers: [HospitalController],
  providers: [
    JwtToken,
    JwtService,
    EmployeeRepoService,
    HospitalService,
    HospitalRepoService,
    FileUploader,
    Logger,
    Hashing
  ],
})
export class HospitalModule {}
