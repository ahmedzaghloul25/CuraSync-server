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
exports.PatientLabOrderModule = exports.PatientLabOrderSchema = exports.PatientLabOrder = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const types_1 = require("../../../../common/types");
const mongoose_2 = require("mongoose");
let PatientLabOrder = class PatientLabOrder {
    requestedBy;
    modifiedBy;
    durationInDays;
    frequentPerDay;
    startDate;
    expectedEndDate;
    completedDate;
    priority;
    log;
    status;
    cancellationReason;
    file;
    unit;
};
exports.PatientLabOrder = PatientLabOrder;
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientLabOrder.prototype, "requestedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientLabOrder.prototype, "modifiedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 1,
        max: 10,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], PatientLabOrder.prototype, "durationInDays", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 1,
        max: 20,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], PatientLabOrder.prototype, "frequentPerDay", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], PatientLabOrder.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], PatientLabOrder.prototype, "expectedEndDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], PatientLabOrder.prototype, "completedDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: types_1.RecordPriorityTypes,
        default: types_1.RecordPriorityTypes.MEDIUM,
    }),
    __metadata("design:type", String)
], PatientLabOrder.prototype, "priority", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                dayNumber: { type: Number, required: true },
                date: { type: Date, required: true },
                sampleNumber: { type: Number, default: 1 },
                scheduledTime: { type: Date, required: true },
                isCompleted: { type: Boolean, default: false },
                completedAt: { type: Date, required: true },
                completedBy: {
                    type: mongoose_2.Types.ObjectId,
                    ref: "Employee",
                    required: true,
                },
                notes: { type: String, maxlength: 200 },
                result: { type: Number || String, required: true },
            },
        ],
    }),
    __metadata("design:type", Array)
], PatientLabOrder.prototype, "log", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: Object.values(types_1.RecordStatusTypes),
        default: types_1.RecordStatusTypes.PENDING,
    }),
    __metadata("design:type", String)
], PatientLabOrder.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PatientLabOrder.prototype, "cancellationReason", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "File",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientLabOrder.prototype, "file", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Unit",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientLabOrder.prototype, "unit", void 0);
exports.PatientLabOrder = PatientLabOrder = __decorate([
    (0, mongoose_1.Schema)()
], PatientLabOrder);
exports.PatientLabOrderSchema = mongoose_1.SchemaFactory.createForClass(PatientLabOrder);
exports.PatientLabOrderModule = mongoose_1.MongooseModule.forFeature([{ name: PatientLabOrder.name, schema: exports.PatientLabOrderSchema }], types_1.connectionNameString.HOSPITAL);
//# sourceMappingURL=patient.lab.record.schema.js.map