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
exports.AddDisposableCatalogArrayDto = exports.AddDisposableCatalogDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const constants_1 = require("../../../common/constants");
class AddDisposableCatalogDto {
    name;
}
exports.AddDisposableCatalogDto = AddDisposableCatalogDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(constants_1.MIN_MAX_LENGTH.nameMinInput),
    (0, class_validator_1.MaxLength)(constants_1.MIN_MAX_LENGTH.nameMaxInput),
    __metadata("design:type", String)
], AddDisposableCatalogDto.prototype, "name", void 0);
class AddDisposableCatalogArrayDto {
    disposables;
}
exports.AddDisposableCatalogArrayDto = AddDisposableCatalogArrayDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AddDisposableCatalogDto),
    __metadata("design:type", Array)
], AddDisposableCatalogArrayDto.prototype, "disposables", void 0);
//# sourceMappingURL=addDispCatDto.js.map