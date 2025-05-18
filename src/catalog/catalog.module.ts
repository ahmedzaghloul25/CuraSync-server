import { Module } from "@nestjs/common";
import { CatalogService } from "./catalog.service";
import { CatalogController } from "./catalog.controller";
import { DepartmentCatalogModule } from "src/DB/schemas/catalog/catalog.department.schema";
import { UnitCatalogModule } from "src/DB/schemas/catalog/catalog.unit.schema";
import { ImagingCatalogModule } from "src/DB/schemas/catalog/catalog.imaging.schema";
import { LabCatalogModule } from "src/DB/schemas/catalog/catalog.lab.schema";
import { MedicineCatalogModule } from "src/DB/schemas/catalog/catalog.medicine.schema";
import { ServiceCatalogModule } from "src/DB/schemas/catalog/catalog.service.schema";
import { VendorCatalogModule } from "src/DB/schemas/catalog/catalog.vendor.schema";
import {
  DepartmentCatalogRepoService,
  DisposableCatalogRepoService,
  ImagingCatalogRepoService,
  LabCatalogRepoService,
  MedicineCatalogRepoService,
  ServiceCatalogRepoService,
  UnitCatalogRepoService,
  VendorCatalogRepoService,
} from "src/DB/repository/catalog";
import { DisposableCatalogModule } from "src/DB/schemas/catalog/catalog.disposable.schema";

@Module({
  imports: [
    DepartmentCatalogModule,
    DisposableCatalogModule,
    UnitCatalogModule,
    ImagingCatalogModule,
    LabCatalogModule,
    MedicineCatalogModule,
    ServiceCatalogModule,
    VendorCatalogModule,
  ],
  providers: [
    CatalogService,
    DepartmentCatalogRepoService,
    DisposableCatalogRepoService,
    UnitCatalogRepoService,
    ImagingCatalogRepoService,
    LabCatalogRepoService,
    MedicineCatalogRepoService,
    ServiceCatalogRepoService,
    VendorCatalogRepoService,
  ],
  controllers: [CatalogController],
})
export class CatalogModule {}
