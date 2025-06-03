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
exports.ServiceModule = exports.PatientServiceOrderSchema = exports.PatientServiceOrder = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const props_1 = require("../../../../common/props");
const types_1 = require("../../../../common/types");
const mongoose_2 = require("mongoose");
let PatientServiceOrder = class PatientServiceOrder extends props_1.CoreProps {
    service;
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
exports.PatientServiceOrder = PatientServiceOrder;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        ref: 'HospitalService'
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientServiceOrder.prototype, "service", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 1,
        max: 10,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], PatientServiceOrder.prototype, "durationInDays", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 1,
        max: 20,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], PatientServiceOrder.prototype, "frequentPerDay", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], PatientServiceOrder.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], PatientServiceOrder.prototype, "expectedEndDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], PatientServiceOrder.prototype, "completedDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: types_1.TYPES.RecordPriorityTypes,
        required: true,
    }),
    __metadata("design:type", String)
], PatientServiceOrder.prototype, "priority", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                dayNumber: { type: Number, required: true },
                date: { type: Date, required: true },
                ServiceNumber: { type: Number, default: 1 },
                scheduledTime: { type: Date, required: true },
                isCompleted: { type: Boolean, default: false },
                completedAt: { type: Date, required: true },
                completedBy: {
                    type: mongoose_2.Types.ObjectId,
                    ref: "Employee",
                    required: true,
                },
                notes: { type: String, maxlength: 200 },
            },
        ],
    }),
    __metadata("design:type", Array)
], PatientServiceOrder.prototype, "log", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: Object.values(types_1.TYPES.RecordStatusTypes),
        default: types_1.TYPES.RecordStatusTypes.PENDING,
    }),
    __metadata("design:type", String)
], PatientServiceOrder.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PatientServiceOrder.prototype, "cancellationReason", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "File",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientServiceOrder.prototype, "file", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Unit",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientServiceOrder.prototype, "unit", void 0);
exports.PatientServiceOrder = PatientServiceOrder = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true },
    })
], PatientServiceOrder);
exports.PatientServiceOrderSchema = mongoose_1.SchemaFactory.createForClass(PatientServiceOrder);
exports.ServiceModule = mongoose_1.MongooseModule.forFeature([{ name: PatientServiceOrder.name, schema: exports.PatientServiceOrderSchema }], types_1.TYPES.connectionNameString.HOSPITAL);
//# sourceMappingURL=patient.service.record.schema.js.map