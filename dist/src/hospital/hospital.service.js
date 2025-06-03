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
exports.HospitalService = void 0;
const common_1 = require("@nestjs/common");
const hospital_repoService_1 = require("../DB/repository/hospital/hospital.repoService");
const services_1 = require("../../common/services");
const utils_1 = require("../../common/utils");
let HospitalService = class HospitalService {
    hospitalRepoService;
    fileUploader;
    logger;
    constructor(hospitalRepoService, fileUploader, logger) {
        this.hospitalRepoService = hospitalRepoService;
        this.fileUploader = fileUploader;
        this.logger = logger;
    }
    async createNewHospital(body, employee, files) {
        if (!files.medicalLicense || !files.commercialReg || !files.TIN) {
            throw new common_1.UnauthorizedException("Files must uploaded");
        }
        const hospitalCheck = await this.hospitalRepoService.findOne({
            slug: (0, utils_1._slugify)(body.name),
        });
        if (hospitalCheck) {
            throw new common_1.ConflictException("Name already registered");
        }
        let uploadedLogo = {};
        if (files.logo) {
            const result = await this.fileUploader.uploadFile(files.logo, {
                folder: "curaSync/hospital-logo",
                transformation: [
                    { width: 300, height: 300, crop: "limit" },
                    { quality: "auto" },
                ],
            });
            uploadedLogo.public_id = result.public_id;
            uploadedLogo.secure_url = result.secure_url;
        }
        const commercialRegUpload = await this.fileUploader.uploadFile(files.commercialReg, {
            folder: `curaSync/hospital-doc/${(0, utils_1._slugify)(body.name)}`,
        });
        const medicalLicenseUpload = await this.fileUploader.uploadFile(files.medicalLicense, {
            folder: `curaSync/hospital-doc/${(0, utils_1._slugify)(body.name)}`,
        });
        const TINUpload = await this.fileUploader.uploadFile(files.TIN, {
            folder: `curaSync/hospital-doc/${(0, utils_1._slugify)(body.name)}`,
        });
        let hospitalData = {
            ...body,
            slug: (0, utils_1._slugify)(body.name),
            medicalLicenseDoc: {
                secure_url: medicalLicenseUpload.secure_url,
                public_id: medicalLicenseUpload.public_id,
            },
            commercialRegDoc: {
                secure_url: commercialRegUpload.secure_url,
                public_id: commercialRegUpload.public_id,
            },
            TINdoc: {
                secure_url: TINUpload.secure_url,
                public_id: TINUpload.public_id,
            },
            ...(Object.keys(uploadedLogo).length > 0 && {
                logo: {
                    secure_url: uploadedLogo.secure_url,
                    public_id: uploadedLogo.public_id,
                },
            }),
            createdBy: employee._id,
        };
        const hospital = (await this.hospitalRepoService.create({
            ...hospitalData,
        }));
        this.logger.log(`[HospitalService] new hospital added, name: ${hospital.slug} - addedBy: ${employee._id}`);
        hospitalData = null;
        return { message: "success", hospital };
    }
    async updateDocuments(hospital, employee, body, newCommRegDoc, newMedLicenseDoc, newLogo) {
        let updatedData = {};
        if (body.commercialRegExpiry) {
            if (!newCommRegDoc) {
                throw new common_1.BadRequestException("Necessary document should be provided");
            }
            const { secure_url, public_id } = await this.fileUploader.uploadFile(newCommRegDoc, {
                folder: `curaSync/hospital-doc/${hospital.slug}`,
            });
            updatedData.commercialRegExpiry = body.commercialRegExpiry;
            updatedData.commercialRegDoc = { secure_url, public_id };
            await this.fileUploader.deleteFile(hospital.commercialRegDoc.public_id);
        }
        if (body.medicalLicenseExpiry) {
            if (!newMedLicenseDoc) {
                throw new common_1.BadRequestException("Necessary document should be provided");
            }
            const { secure_url, public_id } = await this.fileUploader.uploadFile(newMedLicenseDoc, {
                folder: `curaSync/hospital-doc/${hospital.slug}`,
            });
            updatedData.medicalLicenseExpiry = body.medicalLicenseExpiry;
            updatedData.medicalLicenseDoc = { secure_url, public_id };
            await this.fileUploader.deleteFile(hospital.medicalLicenseDoc.public_id);
        }
        if (body.address) {
            updatedData.address = body.address;
        }
        if (newLogo) {
            const { secure_url, public_id } = await this.fileUploader.uploadFile(newLogo, {
                folder: "curaSync/hospital-logo",
                transformation: [
                    { width: 300, height: 300, crop: "limit" },
                    { quality: "auto" },
                ],
            });
            updatedData.logo = { secure_url, public_id };
            await this.fileUploader.deleteFile(hospital.logo.public_id);
        }
        const result = await this.hospitalRepoService.findOneAndUpdate({ _id: hospital._id }, {
            ...updatedData,
            modifiedBy: employee._id,
        });
        this.logger.log(`[HospitalService] Documents updated for hospital: ${result?._id}`);
        return { message: "success", hospital: result };
    }
};
exports.HospitalService = HospitalService;
exports.HospitalService = HospitalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [hospital_repoService_1.default,
        services_1.FileUploader,
        common_1.Logger])
], HospitalService);
//# sourceMappingURL=hospital.service.js.map