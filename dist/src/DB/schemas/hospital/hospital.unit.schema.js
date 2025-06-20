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
exports.HospitalUnitModule = exports.HospitalUnitSchema = exports.HospitalUnit = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const types_1 = require("../../../../common/types");
const mongoose_2 = require("mongoose");
let HospitalUnit = class HospitalUnit {
    unitCatalogId;
    totalBedCount;
    availableBedCount;
    department;
    isConfirmed;
    confirmedBy;
    createdBy;
    isFreezed;
    freezedBy;
    modifiedBy;
};
exports.HospitalUnit = HospitalUnit;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalUnit.prototype, "unitCatalogId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 0,
        max: 500,
    }),
    __metadata("design:type", Number)
], HospitalUnit.prototype, "totalBedCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 0,
        max: 500,
    }),
    __metadata("design:type", Number)
], HospitalUnit.prototype, "availableBedCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Department",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalUnit.prototype, "department", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], HospitalUnit.prototype, "isConfirmed", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalUnit.prototype, "confirmedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: "Employee",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalUnit.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], HospitalUnit.prototype, "isFreezed", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalUnit.prototype, "freezedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalUnit.prototype, "modifiedBy", void 0);
exports.HospitalUnit = HospitalUnit = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], HospitalUnit);
exports.HospitalUnitSchema = mongoose_1.SchemaFactory.createForClass(HospitalUnit);
exports.HospitalUnitSchema.index({ unitCatalogId: 1, department: 1 }, { unique: true });
exports.HospitalUnitModule = mongoose_1.MongooseModule.forFeature([{ name: HospitalUnit.name, schema: exports.HospitalUnitSchema }], types_1.connectionNameString.HOSPITAL);
//# sourceMappingURL=hospital.unit.schema.js.map