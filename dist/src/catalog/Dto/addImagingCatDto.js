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
exports.AddImagingCatalogArrayDto = exports.AddImagingCatalogDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const common_1 = require("../../../common");
class AddImagingCatalogDto {
    name;
    code;
    modality;
    bodyRegion;
    description;
    contraindications;
    patientPreparation;
    radiationDose;
    usesContrast = false;
    contrastDetails;
    requiresConsent = false;
}
exports.AddImagingCatalogDto = AddImagingCatalogDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddImagingCatalogDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddImagingCatalogDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(common_1._Types.TYPES.ImagingTypes),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddImagingCatalogDto.prototype, "modality", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(common_1._Types.TYPES.ImagingBodyRegions),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddImagingCatalogDto.prototype, "bodyRegion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddImagingCatalogDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddImagingCatalogDto.prototype, "contraindications", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddImagingCatalogDto.prototype, "patientPreparation", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddImagingCatalogDto.prototype, "radiationDose", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], AddImagingCatalogDto.prototype, "usesContrast", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AddImagingCatalogDto.prototype, "contrastDetails", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], AddImagingCatalogDto.prototype, "requiresConsent", void 0);
class AddImagingCatalogArrayDto {
    imagings;
}
exports.AddImagingCatalogArrayDto = AddImagingCatalogArrayDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AddImagingCatalogDto),
    __metadata("design:type", Array)
], AddImagingCatalogArrayDto.prototype, "imagings", void 0);
//# sourceMappingURL=addImagingCatDto.js.map