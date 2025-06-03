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
exports.HospitalController = void 0;
const common_1 = require("@nestjs/common");
const hospital_service_1 = require("./hospital.service");
const platform_express_1 = require("@nestjs/platform-express");
const utils_1 = require("../../common/utils");
const constants_1 = require("../../common/constants");
const DTO_1 = require("./DTO");
const guards_1 = require("../../common/guards");
const decorators_1 = require("../../common/decorators");
const types_1 = require("../../common/types");
const pipes_1 = require("../../common/pipes");
let HospitalController = class HospitalController {
    hospitalService;
    constructor(hospitalService) {
        this.hospitalService = hospitalService;
    }
    createNewHospital(body, employee, files) {
        return this.hospitalService.createNewHospital(body, employee, files);
    }
    updateHospital(hospital, employee, body, newCommRegDoc, newMedLicenseDoc, newLogo) {
        return this.hospitalService.updateDocuments(hospital, employee, body, newCommRegDoc, newMedLicenseDoc, newLogo);
    }
};
exports.HospitalController = HospitalController;
__decorate([
    (0, common_1.Post)("new"),
    (0, common_1.HttpCode)(201),
    (0, common_1.UseGuards)(guards_1.AuthenticationGuard, guards_1.AuthorizationGuard),
    (0, decorators_1.Roles)(types_1.AllRoles.SYSTEMS_ADMINISTRATOR),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        {
            name: "medicalLicense",
            maxCount: 1,
            ...(0, utils_1.multerCloudConfig)({
                allowedCategory: constants_1.FILE_CATEGORIES.document,
            }),
        },
        {
            name: "commercialReg",
            maxCount: 1,
            ...(0, utils_1.multerCloudConfig)({
                allowedCategory: constants_1.FILE_CATEGORIES.document,
            }),
        },
        {
            name: "TIN",
            maxCount: 1,
            ...(0, utils_1.multerCloudConfig)({
                allowedCategory: constants_1.FILE_CATEGORIES.document,
            }),
        },
        {
            name: "logo",
            maxCount: 1,
            ...(0, utils_1.multerCloudConfig)({
                allowedCategory: constants_1.FILE_CATEGORIES.image,
                sizeLimit: 5,
            }),
        },
    ])),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.Employee)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DTO_1.createNewHospitalDto, Object, Object]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "createNewHospital", null);
__decorate([
    (0, common_1.Put)("update/:hospitalId"),
    (0, common_1.UseGuards)(guards_1.AuthenticationGuard, guards_1.AuthorizationGuard),
    (0, decorators_1.Roles)(types_1.AllRoles.SYSTEMS_ADMINISTRATOR),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        {
            name: "newCommRegDoc",
            maxCount: 1,
            ...(0, utils_1.multerCloudConfig)({
                allowedCategory: constants_1.FILE_CATEGORIES.document,
            }),
        },
        {
            name: "newMedLicenseDoc",
            maxCount: 1,
            ...(0, utils_1.multerCloudConfig)({
                allowedCategory: constants_1.FILE_CATEGORIES.document,
            }),
        },
        {
            name: "newLogo",
            maxCount: 1,
            ...(0, utils_1.multerCloudConfig)({
                allowedCategory: constants_1.FILE_CATEGORIES.image,
                sizeLimit: 5,
            }),
        },
    ])),
    __param(0, (0, common_1.Param)("hospitalId", pipes_1.HospitalValidation)),
    __param(1, (0, decorators_1.Employee)()),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.UploadedFile)()),
    __param(4, (0, common_1.UploadedFile)()),
    __param(5, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DTO_1.UpdateDocumentsDto, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "updateHospital", null);
exports.HospitalController = HospitalController = __decorate([
    (0, common_1.Controller)({ version: "1", path: "hospital" }),
    __metadata("design:paramtypes", [hospital_service_1.HospitalService])
], HospitalController);
//# sourceMappingURL=hospital.controller.js.map