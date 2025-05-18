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
exports.ServiceModule = exports.PatientMedicineOrderSchema = exports.PatientMedicineOrder = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../../../common");
const mongoose_2 = require("mongoose");
let PatientMedicineOrder = class PatientMedicineOrder extends common_1.COMMON_PROPS.CoreProps {
    medicine;
    durationInDays;
    frequentPerDay;
    startDate;
    expectedEndDate;
    completedDate;
    priority;
    log;
    status;
    clinicalNotes;
    cancellationReason;
    file;
    unit;
};
exports.PatientMedicineOrder = PatientMedicineOrder;
__decorate([
    (0, mongoose_1.Prop)({
        ref: "HospitalMedicine",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientMedicineOrder.prototype, "medicine", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 1,
        max: 10,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], PatientMedicineOrder.prototype, "durationInDays", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 1,
        max: 20,
        default: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], PatientMedicineOrder.prototype, "frequentPerDay", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], PatientMedicineOrder.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], PatientMedicineOrder.prototype, "expectedEndDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], PatientMedicineOrder.prototype, "completedDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: common_1._Types.TYPES.RecordPriorityTypes,
        required: true,
    }),
    __metadata("design:type", String)
], PatientMedicineOrder.prototype, "priority", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                dayNumber: { type: Number, required: true },
                date: { type: Date, required: true },
                doseNumber: { type: Number, default: 1 },
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
], PatientMedicineOrder.prototype, "log", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: Object.values(common_1._Types.TYPES.RecordStatusTypes),
        default: common_1._Types.TYPES.RecordStatusTypes.PENDING,
    }),
    __metadata("design:type", String)
], PatientMedicineOrder.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        minlength: 2,
        maxlength: 500,
    }),
    __metadata("design:type", String)
], PatientMedicineOrder.prototype, "clinicalNotes", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PatientMedicineOrder.prototype, "cancellationReason", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "File",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientMedicineOrder.prototype, "file", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Unit",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientMedicineOrder.prototype, "unit", void 0);
exports.PatientMedicineOrder = PatientMedicineOrder = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], PatientMedicineOrder);
exports.PatientMedicineOrderSchema = mongoose_1.SchemaFactory.createForClass(PatientMedicineOrder);
exports.ServiceModule = mongoose_1.MongooseModule.forFeature([{ name: PatientMedicineOrder.name, schema: exports.PatientMedicineOrderSchema }], common_1._Types.TYPES.connectionNameString.HOSPITAL);
//# sourceMappingURL=patient.medicine.record.schema.js.map