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
exports.CrossDbResolverService = void 0;
const common_1 = require("@nestjs/common");
const catalog_1 = require("../../src/DB/repository/catalog");
let CrossDbResolverService = class CrossDbResolverService {
    departmentCatalogRepoService;
    disposableCatalogRepoService;
    imagingCatalogRepoService;
    labCatalogRepoService;
    medicationCatalogRepoService;
    serviceCatalogRepoService;
    unitCatalogRepoService;
    keys;
    constructor(departmentCatalogRepoService, disposableCatalogRepoService, imagingCatalogRepoService, labCatalogRepoService, medicationCatalogRepoService, serviceCatalogRepoService, unitCatalogRepoService) {
        this.departmentCatalogRepoService = departmentCatalogRepoService;
        this.disposableCatalogRepoService = disposableCatalogRepoService;
        this.imagingCatalogRepoService = imagingCatalogRepoService;
        this.labCatalogRepoService = labCatalogRepoService;
        this.medicationCatalogRepoService = medicationCatalogRepoService;
        this.serviceCatalogRepoService = serviceCatalogRepoService;
        this.unitCatalogRepoService = unitCatalogRepoService;
        this.keys = Object.freeze([
            {
                fieldName: "departmentCatalogId",
                resultField: "department",
                service: this.departmentCatalogRepoService,
            },
            {
                fieldName: "disposableCatalogId",
                resultField: "disposable",
                service: this.disposableCatalogRepoService,
            },
            {
                fieldName: "imagingCatalogId",
                resultField: "imaging",
                service: this.imagingCatalogRepoService,
            },
            {
                fieldName: "labCatalogId",
                resultField: "lab",
                service: this.labCatalogRepoService,
            },
            {
                fieldName: "medicineCatalogId",
                resultField: "medicine",
                service: this.medicationCatalogRepoService,
            },
            {
                fieldName: "serviceCatalogId",
                resultField: "service",
                service: this.serviceCatalogRepoService,
            },
            {
                fieldName: "unitCatalogId",
                resultField: "unit",
                service: this.unitCatalogRepoService,
            },
        ]);
    }
    async enrichReferences(document) {
        const result = { ...document };
        for (const key of this.keys) {
            if (document[key.fieldName]) {
                result[key.resultField] = await key.service.findById(document[key.fieldName]);
            }
        }
        return result;
    }
};
exports.CrossDbResolverService = CrossDbResolverService;
exports.CrossDbResolverService = CrossDbResolverService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [catalog_1.DepartmentCatalogRepoService,
        catalog_1.DisposableCatalogRepoService,
        catalog_1.ImagingCatalogRepoService,
        catalog_1.LabCatalogRepoService,
        catalog_1.MedicineCatalogRepoService,
        catalog_1.ServiceCatalogRepoService,
        catalog_1.UnitCatalogRepoService])
], CrossDbResolverService);
//# sourceMappingURL=databaseIdResolver.js.map