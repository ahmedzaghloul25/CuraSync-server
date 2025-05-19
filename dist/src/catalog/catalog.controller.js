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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogController = void 0;
const common_1 = require("@nestjs/common");
const catalog_service_1 = require("./catalog.service");
const Dto_1 = require("./Dto");
const addImagingCatDto_1 = require("./Dto/addImagingCatDto");
let CatalogController = class CatalogController {
    catalogService;
    constructor(catalogService) {
        this.catalogService = catalogService;
    }
    addDepartmentCatalog(body) {
        return this.catalogService.addDepartmentCatalogArray(body);
    }
    addUnitsCatalog(body) {
        return this.catalogService.addUnitCatalogArray(body);
    }
    addServicesCatalog(body) {
        return this.catalogService.addServiceCatalogArray(body);
    }
    addLabCatalog(body) {
        return this.catalogService.addLabCatalogArray(body);
    }
    addImagingCatalog(body) {
        return this.catalogService.addImagingCatalogArray(body);
    }
    addMedicineCatalog(body) {
        return this.catalogService.addMedicineCatalogArray(body);
    }
    addDisposableCatalog(body) {
        return this.catalogService.addDisposableCatalogArray(body);
    }
    addVendorCatalog(body) {
        return this.catalogService.addVendorCatalogArray(body);
    }
};
exports.CatalogController = CatalogController;
__decorate([
    (0, common_1.Post)("departments/new"),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Dto_1.AddDepartmentCatArrayDto]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "addDepartmentCatalog", null);
__decorate([
    (0, common_1.Post)("units/new"),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Dto_1.AddUnitCatArrayDto]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "addUnitsCatalog", null);
__decorate([
    (0, common_1.Post)("services/new"),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Dto_1.AddServiceCatArrayDto]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "addServicesCatalog", null);
__decorate([
    (0, common_1.Post)("laboratories/new"),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Dto_1.AddLabCatalogArrayDto]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "addLabCatalog", null);
__decorate([
    (0, common_1.Post)("imagings/new"),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addImagingCatDto_1.AddImagingCatalogArrayDto]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "addImagingCatalog", null);
__decorate([
    (0, common_1.Post)("medicines/new"),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Dto_1.AddMedicineCatalogArrayDto]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "addMedicineCatalog", null);
__decorate([
    (0, common_1.Post)("disposables/new"),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Dto_1.AddDisposableCatalogArrayDto]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "addDisposableCatalog", null);
__decorate([
    (0, common_1.Post)("vendors/new"),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Dto_1.AddVendorCatalogArrayDto]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "addVendorCatalog", null);
exports.CatalogController = CatalogController = __decorate([
    (0, common_1.Controller)({ version: "1", path: "catalog" }),
    __metadata("design:paramtypes", [catalog_service_1.CatalogService])
], CatalogController);
//# sourceMappingURL=catalog.controller.js.map