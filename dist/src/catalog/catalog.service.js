"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogService = void 0;
const common_1 = require("@nestjs/common");
const catalog_1 = require("../DB/repository/catalog");
let CatalogService = class CatalogService {
    departmentCatRepoService;
    disposableCatRepoService;
    imagingCatRepoService;
    labCatRepoService;
    medicineCatRepoService;
    serviceCatRepoService;
    unitCatRepoService;
    vendorCatRepoService;
    constructor(departmentCatRepoService, disposableCatRepoService, imagingCatRepoService, labCatRepoService, medicineCatRepoService, serviceCatRepoService, unitCatRepoService, vendorCatRepoService) {
        this.departmentCatRepoService = departmentCatRepoService;
        this.disposableCatRepoService = disposableCatRepoService;
        this.imagingCatRepoService = imagingCatRepoService;
        this.labCatRepoService = labCatRepoService;
        this.medicineCatRepoService = medicineCatRepoService;
        this.serviceCatRepoService = serviceCatRepoService;
        this.unitCatRepoService = unitCatRepoService;
        this.vendorCatRepoService = vendorCatRepoService;
    }
    async addDepartmentCatalogArray(body) {
        const department = await this.departmentCatRepoService.create(body.departments);
        return { message: "success", department };
    }
    async addUnitCatalogArray(body) {
        const units = await this.unitCatRepoService.create(body.units);
        return { message: "success", units };
    }
    async addServiceCatalogArray(body) {
        const services = await this.serviceCatRepoService.create(body.services);
        return { message: "success", services };
    }
    async addLabCatalogArray(body) {
        const laboratories = await this.labCatRepoService.create(body.laboratories);
        return { message: "success", laboratories };
    }
    async addImagingCatalogArray(body) {
        const imagings = await this.imagingCatRepoService.create(body.imagings);
        return { message: "success", imagings };
    }
    async addMedicineCatalogArray(body) {
        const medicines = await this.medicineCatRepoService.create(body.medicines);
        return { message: "success", medicines };
    }
    async addDisposableCatalogArray(body) {
        const disposables = await this.disposableCatRepoService.create(body.disposables);
        return { message: "success", disposables };
    }
    async addVendorCatalogArray(body) {
        const vendors = await this.vendorCatRepoService.create(body.vendors);
        return { message: "success", vendors };
    }
};
exports.CatalogService = CatalogService;
exports.CatalogService = CatalogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [catalog_1.DepartmentCatalogRepoService,
        catalog_1.DisposableCatalogRepoService,
        catalog_1.ImagingCatalogRepoService,
        catalog_1.LabCatalogRepoService,
        catalog_1.MedicineCatalogRepoService,
        catalog_1.ServiceCatalogRepoService,
        catalog_1.UnitCatalogRepoService,
        catalog_1.VendorCatalogRepoService])
], CatalogService);
//# sourceMappingURL=catalog.service.js.map