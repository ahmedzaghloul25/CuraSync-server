import { Logger, Module } from "@nestjs/common";
import { UnitController } from "./unit.controller";
import { UnitService } from "./unit.service";
import HospitalUnitRepoService from "src/DB/repository/hospital/hospital.unit.repoService";
import { UnitCatalogRepoService } from "src/DB/repository/catalog";
import { HospitalUnitModule } from "src/DB/schemas/hospital/hospital.unit.schema";
import { UnitCatalogModule } from "src/DB/schemas/catalog/catalog.unit.schema";
import { Hashing, JwtToken } from "common/services";
import { JwtService } from "@nestjs/jwt";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";
import { employeeModule } from "src/DB/schemas/hospital/hospital.employee.schema";

@Module({
  imports : [HospitalUnitModule, UnitCatalogModule, employeeModule],
  controllers: [UnitController],
  providers: [
    UnitService,
    HospitalUnitRepoService,
    UnitCatalogRepoService,
    Logger,
    JwtToken,
    JwtService,
    EmployeeRepoService,
    Hashing
  ],
})
export class UnitModule {}
