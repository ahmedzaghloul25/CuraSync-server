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
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
class CommonProps {
    createdBy;
    isDeleted;
    deletedBy;
    modifiedBy;
    isConfirmed;
    confirmedBy;
    hospital;
    file;
    service;
    patient;
    unit;
    departments;
}
exports.default = CommonProps;
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CommonProps.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], CommonProps.prototype, "isDeleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CommonProps.prototype, "deletedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CommonProps.prototype, "modifiedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], CommonProps.prototype, "isConfirmed", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CommonProps.prototype, "confirmedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Hospital",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CommonProps.prototype, "hospital", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "File",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CommonProps.prototype, "file", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Service",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CommonProps.prototype, "service", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Patient",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CommonProps.prototype, "patient", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Unit",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], CommonProps.prototype, "unit", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Department",
    }),
    __metadata("design:type", Array)
], CommonProps.prototype, "departments", void 0);
//# sourceMappingURL=commonProps.js.map