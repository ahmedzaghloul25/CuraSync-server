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
exports.ConfirmableProps = exports.CatalogProps = exports.CoreProps = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
class CoreProps {
    createdBy;
    isDeleted;
    deletedBy;
    modifiedBy;
}
exports.CoreProps = CoreProps;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CoreProps.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], CoreProps.prototype, "isDeleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CoreProps.prototype, "deletedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CoreProps.prototype, "modifiedBy", void 0);
class CatalogProps {
    addedByHospitalId;
    addedByEmployeeId;
}
exports.CatalogProps = CatalogProps;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CatalogProps.prototype, "addedByHospitalId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CatalogProps.prototype, "addedByEmployeeId", void 0);
class ConfirmableProps extends CoreProps {
    isConfirmed;
    confirmedBy;
}
exports.ConfirmableProps = ConfirmableProps;
__decorate([
    (0, mongoose_1.Prop)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], ConfirmableProps.prototype, "isConfirmed", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ConfirmableProps.prototype, "confirmedBy", void 0);
//# sourceMappingURL=commonProps.js.map