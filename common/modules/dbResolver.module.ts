import { Module } from "@nestjs/common";
import { CrossDbResolverService } from "common/services/databaseIdResolver";
import { DepartmentCatalogModule } from "src/DB/schemas/catalog/catalog.department.schema";
import { DisposableCatalogModule } from "src/DB/schemas/catalog/catalog.disposable.schema";
import { ImagingCatalogModule } from "src/DB/schemas/catalog/catalog.imaging.schema";
import { LabCatalogModule } from "src/DB/schemas/catalog/catalog.lab.schema";
import { MedicineCatalogModule } from "src/DB/schemas/catalog/catalog.medicine.schema";
import { ServiceCatalogModule } from "src/DB/schemas/catalog/catalog.service.schema";
import { UnitCatalogModule } from "src/DB/schemas/catalog/catalog.unit.schema";
import {
  DepartmentCatalogRepoService,
  DisposableCatalogRepoService,
  ImagingCatalogRepoService,
  LabCatalogRepoService,
  MedicineCatalogRepoService,
  ServiceCatalogRepoService,
  UnitCatalogRepoService,
} from "src/DB/repository/catalog";

/**
 * Module responsible for resolving cross-database references
 * Provides catalog modules and resolver service for enriching documents
 * with their related catalog data
 */
@Module({
  imports: [
    DepartmentCatalogModule,
    DisposableCatalogModule,
    ImagingCatalogModule,
    LabCatalogModule,
    MedicineCatalogModule,
    ServiceCatalogModule,
    UnitCatalogModule
  ],
  providers: [
    CrossDbResolverService,
    DepartmentCatalogRepoService,
    DisposableCatalogRepoService,
    ImagingCatalogRepoService,
    LabCatalogRepoService,
    MedicineCatalogRepoService,
    ServiceCatalogRepoService,
    UnitCatalogRepoService,
  ],
  exports: [
    DepartmentCatalogModule,
    DisposableCatalogModule,
    ImagingCatalogModule,
    LabCatalogModule,
    MedicineCatalogModule,
    ServiceCatalogModule,
    UnitCatalogModule,
    CrossDbResolverService,
    DepartmentCatalogRepoService,
    DisposableCatalogRepoService,
    ImagingCatalogRepoService,
    LabCatalogRepoService,
    MedicineCatalogRepoService,
    ServiceCatalogRepoService,
    UnitCatalogRepoService,
  ] 
})
export class DbResolverModule {
  // This module is used to resolve database IDs across different modules.
  // It imports the necessary catalog modules to ensure that the database
  // resolver can access the required schemas and repositories.
}
