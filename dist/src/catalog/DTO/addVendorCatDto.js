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
exports.AddVendorCatalogArrayDto = exports.AddVendorCatalogDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const constants_1 = require("../../../common/constants");
class AddVendorCatalogDto {
    name;
    phone;
    address;
    email;
    commercialRegNum;
    TIN;
}
exports.AddVendorCatalogDto = AddVendorCatalogDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(constants_1.MIN_MAX_LENGTH.nameMinInput, constants_1.MIN_MAX_LENGTH.nameMaxInput),
    __metadata("design:type", String)
], AddVendorCatalogDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPhoneNumber)('EG'),
    __metadata("design:type", String)
], AddVendorCatalogDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(constants_1.MIN_MAX_LENGTH.descMinInput, constants_1.MIN_MAX_LENGTH.descMaxInput),
    __metadata("design:type", String)
], AddVendorCatalogDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], AddVendorCatalogDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddVendorCatalogDto.prototype, "commercialRegNum", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddVendorCatalogDto.prototype, "TIN", void 0);
class AddVendorCatalogArrayDto {
    vendors;
}
exports.AddVendorCatalogArrayDto = AddVendorCatalogArrayDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AddVendorCatalogDto),
    __metadata("design:type", Array)
], AddVendorCatalogArrayDto.prototype, "vendors", void 0);
//# sourceMappingURL=addVendorCatDto.js.map