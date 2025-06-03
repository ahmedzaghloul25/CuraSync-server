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
exports.AddDepartmentCatArrayDto = exports.AddDepartmentCatDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const constants_1 = require("../../../common/constants");
class AddDepartmentCatDto {
    name;
    description;
}
exports.AddDepartmentCatDto = AddDepartmentCatDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddDepartmentCatDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(constants_1.MIN_MAX_LENGTH.descMinInput),
    (0, class_validator_1.MaxLength)(constants_1.MIN_MAX_LENGTH.descMaxInput),
    __metadata("design:type", String)
], AddDepartmentCatDto.prototype, "description", void 0);
class AddDepartmentCatArrayDto {
    departments;
}
exports.AddDepartmentCatArrayDto = AddDepartmentCatArrayDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AddDepartmentCatDto),
    __metadata("design:type", Array)
], AddDepartmentCatArrayDto.prototype, "departments", void 0);
//# sourceMappingURL=addDepCatDto.js.map