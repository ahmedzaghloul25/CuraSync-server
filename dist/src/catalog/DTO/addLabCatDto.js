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
exports.AddLabCatalogArrayDto = exports.AddLabCatalogDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const types_1 = require("../../../common/types");
class AddLabCatalogDto {
    name;
    code;
    loincCode;
    category;
    description;
    specimenType;
    specimenRequirements;
    processingTime;
    referenceValues;
    requiresConsent;
    requiredFasting;
}
exports.AddLabCatalogDto = AddLabCatalogDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], AddLabCatalogDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], AddLabCatalogDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], AddLabCatalogDto.prototype, "loincCode", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(types_1.LAbTestCategory),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddLabCatalogDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], AddLabCatalogDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(types_1.SpecimenType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddLabCatalogDto.prototype, "specimenType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], AddLabCatalogDto.prototype, "specimenRequirements", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], AddLabCatalogDto.prototype, "processingTime", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], AddLabCatalogDto.prototype, "referenceValues", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], AddLabCatalogDto.prototype, "requiresConsent", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AddLabCatalogDto.prototype, "requiredFasting", void 0);
class AddLabCatalogArrayDto {
    laboratories;
}
exports.AddLabCatalogArrayDto = AddLabCatalogArrayDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AddLabCatalogDto),
    __metadata("design:type", Array)
], AddLabCatalogArrayDto.prototype, "laboratories", void 0);
//# sourceMappingURL=addLabCatDto.js.map