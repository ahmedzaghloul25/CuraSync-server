"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbResolverModule = void 0;
const common_1 = require("@nestjs/common");
const databaseIdResolver_1 = require("../services/databaseIdResolver");
const catalog_department_schema_1 = require("../../src/DB/schemas/catalog/catalog.department.schema");
const catalog_disposable_schema_1 = require("../../src/DB/schemas/catalog/catalog.disposable.schema");
const catalog_imaging_schema_1 = require("../../src/DB/schemas/catalog/catalog.imaging.schema");
const catalog_lab_schema_1 = require("../../src/DB/schemas/catalog/catalog.lab.schema");
const catalog_medicine_schema_1 = require("../../src/DB/schemas/catalog/catalog.medicine.schema");
const catalog_service_schema_1 = require("../../src/DB/schemas/catalog/catalog.service.schema");
const catalog_unit_schema_1 = require("../../src/DB/schemas/catalog/catalog.unit.schema");
const catalog_1 = require("../../src/DB/repository/catalog");
let DbResolverModule = class DbResolverModule {
};
exports.DbResolverModule = DbResolverModule;
exports.DbResolverModule = DbResolverModule = __decorate([
    (0, common_1.Module)({
        imports: [
            catalog_department_schema_1.DepartmentCatalogModule,
            catalog_disposable_schema_1.DisposableCatalogModule,
            catalog_imaging_schema_1.ImagingCatalogModule,
            catalog_lab_schema_1.LabCatalogModule,
            catalog_medicine_schema_1.MedicineCatalogModule,
            catalog_service_schema_1.ServiceCatalogModule,
            catalog_unit_schema_1.UnitCatalogModule
        ],
        providers: [
            databaseIdResolver_1.CrossDbResolverService,
            catalog_1.DepartmentCatalogRepoService,
            catalog_1.DisposableCatalogRepoService,
            catalog_1.ImagingCatalogRepoService,
            catalog_1.LabCatalogRepoService,
            catalog_1.MedicineCatalogRepoService,
            catalog_1.ServiceCatalogRepoService,
            catalog_1.UnitCatalogRepoService,
        ],
        exports: [
            catalog_department_schema_1.DepartmentCatalogModule,
            catalog_disposable_schema_1.DisposableCatalogModule,
            catalog_imaging_schema_1.ImagingCatalogModule,
            catalog_lab_schema_1.LabCatalogModule,
            catalog_medicine_schema_1.MedicineCatalogModule,
            catalog_service_schema_1.ServiceCatalogModule,
            catalog_unit_schema_1.UnitCatalogModule,
            databaseIdResolver_1.CrossDbResolverService,
            catalog_1.DepartmentCatalogRepoService,
            catalog_1.DisposableCatalogRepoService,
            catalog_1.ImagingCatalogRepoService,
            catalog_1.LabCatalogRepoService,
            catalog_1.MedicineCatalogRepoService,
            catalog_1.ServiceCatalogRepoService,
            catalog_1.UnitCatalogRepoService,
        ]
    })
], DbResolverModule);
//# sourceMappingURL=dbResolver.module.js.map