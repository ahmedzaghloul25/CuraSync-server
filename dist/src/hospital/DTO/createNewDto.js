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
exports.CreateNewHospitalDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const constants_1 = require("../../../common/constants");
class CreateNewHospitalDto {
    name;
    address;
    medicalLicenseNumber;
    medicalLicenseExpiry;
    commercialRegNumber;
    commercialRegExpiry;
    TIN_Number;
    medicalLicense;
    commercialReg;
    TIN;
    logo;
}
exports.CreateNewHospitalDto = CreateNewHospitalDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(constants_1.MIN_MAX_LENGTH.nameMinInput),
    (0, class_validator_1.MaxLength)(constants_1.MIN_MAX_LENGTH.nameMaxInput),
    __metadata("design:type", String)
], CreateNewHospitalDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(constants_1.MIN_MAX_LENGTH.descMinInput),
    (0, class_validator_1.MaxLength)(constants_1.MIN_MAX_LENGTH.descMaxInput),
    __metadata("design:type", String)
], CreateNewHospitalDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNewHospitalDto.prototype, "medicalLicenseNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.MinDate)(new Date()),
    __metadata("design:type", Date)
], CreateNewHospitalDto.prototype, "medicalLicenseExpiry", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNewHospitalDto.prototype, "commercialRegNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.MinDate)(new Date()),
    __metadata("design:type", Date)
], CreateNewHospitalDto.prototype, "commercialRegExpiry", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateNewHospitalDto.prototype, "TIN_Number", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", Object)
], CreateNewHospitalDto.prototype, "medicalLicense", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", Object)
], CreateNewHospitalDto.prototype, "commercialReg", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", Object)
], CreateNewHospitalDto.prototype, "TIN", void 0);
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", Object)
], CreateNewHospitalDto.prototype, "logo", void 0);
//# sourceMappingURL=createNewDto.js.map