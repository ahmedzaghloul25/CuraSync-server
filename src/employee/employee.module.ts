import { Logger, Module } from "@nestjs/common";
import { EmployeeController } from "./employee.controller";
import { EmployeeService } from "./employee.service";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { employeeModule } from "src/DB/schemas/hospital/hospital.employee.schema";
import { Hashing, JwtToken } from "common/services";
import { JwtService } from "@nestjs/jwt";
import HospitalRepoService from "src/DB/repository/hospital/hospital.repoService";
import { hospitalModule } from "src/DB/schemas/hospital/hospital.schema";

@Module({
  imports: [employeeModule, hospitalModule],
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
    EmployeeRepoService,
    HospitalRepoService,
    Logger,
    EventEmitter2,
    Hashing,
    JwtToken,
    JwtService,
  ],
})
export class EmployeeModule {}
