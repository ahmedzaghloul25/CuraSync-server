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
    (0, class_validator_1.IsNotEmpty)({ message: "Vendor name is required" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100, { message: "Name must be between 2 and 100 characters" }),
    __metadata("design:type", String)
], AddVendorCatalogDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Phone number is required" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\+?[0-9\-\s()]+$/, {
        message: "Please provide a valid phone number",
    }),
    __metadata("design:type", String)
], AddVendorCatalogDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Address is required" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 400, { message: "Address must be between 3 and 400 characters" }),
    __metadata("design:type", String)
], AddVendorCatalogDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)({}, { message: "Please provide a valid email address" }),
    __metadata("design:type", String)
], AddVendorCatalogDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Commercial registration number is required" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddVendorCatalogDto.prototype, "commercialRegNum", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Tax Identification Number is required" }),
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