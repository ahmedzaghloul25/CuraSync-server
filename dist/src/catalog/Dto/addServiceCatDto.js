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
exports.AddServiceCatArrayDto = exports.AddServiceCatDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const common_1 = require("../../../common");
class AddServiceCatDto {
    name;
    description;
}
exports.AddServiceCatDto = AddServiceCatDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddServiceCatDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(common_1.CONSTANTS.MIN_MAX_LENGTH.descMinInput),
    (0, class_validator_1.MaxLength)(common_1.CONSTANTS.MIN_MAX_LENGTH.descMaxInput),
    __metadata("design:type", String)
], AddServiceCatDto.prototype, "description", void 0);
class AddServiceCatArrayDto {
    services;
}
exports.AddServiceCatArrayDto = AddServiceCatArrayDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AddServiceCatDto),
    __metadata("design:type", Array)
], AddServiceCatArrayDto.prototype, "services", void 0);
//# sourceMappingURL=addServiceCatDto.js.map