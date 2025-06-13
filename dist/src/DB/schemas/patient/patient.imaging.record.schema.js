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
exports.PatientImagingOrderModule = exports.PatientImagingOrderSchema = exports.PatientImagingOrder = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const props_1 = require("../../../../common/props");
const types_1 = require("../../../../common/types");
const mongoose_2 = require("mongoose");
let PatientImagingOrder = class PatientImagingOrder extends props_1.CoreProps {
    imaging;
    priority;
    status;
    completedAt;
    completedBy;
    cancellationReason;
    file;
    unit;
};
exports.PatientImagingOrder = PatientImagingOrder;
__decorate([
    (0, mongoose_1.Prop)({
        ref: "HospitalImaging",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientImagingOrder.prototype, "imaging", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: types_1.RecordPriorityTypes,
        default: types_1.RecordPriorityTypes.MEDIUM,
    }),
    __metadata("design:type", String)
], PatientImagingOrder.prototype, "priority", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: Object.values(types_1.RecordStatusTypes),
        default: types_1.RecordStatusTypes.PENDING,
    }),
    __metadata("design:type", String)
], PatientImagingOrder.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], PatientImagingOrder.prototype, "completedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: "Employee",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientImagingOrder.prototype, "completedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PatientImagingOrder.prototype, "cancellationReason", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "File",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientImagingOrder.prototype, "file", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Unit",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientImagingOrder.prototype, "unit", void 0);
exports.PatientImagingOrder = PatientImagingOrder = __decorate([
    (0, mongoose_1.Schema)()
], PatientImagingOrder);
exports.PatientImagingOrderSchema = mongoose_1.SchemaFactory.createForClass(PatientImagingOrder);
exports.PatientImagingOrderModule = mongoose_1.MongooseModule.forFeature([{ name: PatientImagingOrder.name, schema: exports.PatientImagingOrderSchema }], types_1.connectionNameString.HOSPITAL);
//# sourceMappingURL=patient.imaging.record.schema.js.map