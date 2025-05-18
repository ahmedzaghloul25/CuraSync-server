"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogModule = void 0;
const common_1 = require("@nestjs/common");
const catalog_service_1 = require("./catalog.service");
const catalog_controller_1 = require("./catalog.controller");
const catalog_department_schema_1 = require("../DB/schemas/catalog/catalog.department.schema");
const catalog_unit_schema_1 = require("../DB/schemas/catalog/catalog.unit.schema");
const catalog_imaging_schema_1 = require("../DB/schemas/catalog/catalog.imaging.schema");
const catalog_lab_schema_1 = require("../DB/schemas/catalog/catalog.lab.schema");
const catalog_medicine_schema_1 = require("../DB/schemas/catalog/catalog.medicine.schema");
const catalog_service_schema_1 = require("../DB/schemas/catalog/catalog.service.schema");
const catalog_vendor_schema_1 = require("../DB/schemas/catalog/catalog.vendor.schema");
const catalog_1 = require("../DB/repository/catalog");
const catalog_disposable_schema_1 = require("../DB/schemas/catalog/catalog.disposable.schema");
let CatalogModule = class CatalogModule {
};
exports.CatalogModule = CatalogModule;
exports.CatalogModule = CatalogModule = __decorate([
    (0, common_1.Module)({
        imports: [
            catalog_department_schema_1.DepartmentCatalogModule,
            catalog_disposable_schema_1.DisposableCatalogModule,
            catalog_unit_schema_1.UnitCatalogModule,
            catalog_imaging_schema_1.ImagingCatalogModule,
            catalog_lab_schema_1.LabCatalogModule,
            catalog_medicine_schema_1.MedicineCatalogModule,
            catalog_service_schema_1.ServiceCatalogModule,
            catalog_vendor_schema_1.VendorCatalogModule,
        ],
        providers: [
            catalog_service_1.CatalogService,
            catalog_1.DepartmentCatalogRepoService,
            catalog_1.DisposableCatalogRepoService,
            catalog_1.UnitCatalogRepoService,
            catalog_1.ImagingCatalogRepoService,
            catalog_1.LabCatalogRepoService,
            catalog_1.MedicineCatalogRepoService,
            catalog_1.ServiceCatalogRepoService,
            catalog_1.VendorCatalogRepoService,
        ],
        controllers: [catalog_controller_1.CatalogController],
    })
], CatalogModule);
//# sourceMappingURL=catalog.module.js.map