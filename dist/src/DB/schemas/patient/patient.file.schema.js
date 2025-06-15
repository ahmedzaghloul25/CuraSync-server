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
exports.PatientFileModule = exports.PatientFileSchema = exports.PatientFile = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constants_1 = require("../../../../common/constants");
const types_1 = require("../../../../common/types");
const mongoose_2 = require("mongoose");
let PatientFile = class PatientFile {
    patient;
    hospital;
    status;
    currentUnit;
    initialDiagnosis;
    admissions;
    discharges;
};
exports.PatientFile = PatientFile;
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Patient",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientFile.prototype, "patient", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Hospital",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientFile.prototype, "hospital", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: types_1.FileStatus,
        default: types_1.FileStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], PatientFile.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "HospitalUnit"
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientFile.prototype, "currentUnit", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        minlength: 2,
        maxlength: 500,
        required: true,
        type: [
            {
                date: { type: Date, required: true },
                diagnosis: {
                    type: String,
                    minlength: constants_1.MIN_MAX_LENGTH.descMinInput,
                    maxlength: constants_1.MIN_MAX_LENGTH.descMaxInput,
                    required: true,
                },
            },
        ],
    }),
    __metadata("design:type", Array)
], PatientFile.prototype, "initialDiagnosis", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                date: { type: Date, required: true },
                toUnit: { type: mongoose_2.Types.ObjectId, ref: "Unit" },
            },
        ],
    }),
    __metadata("design:type", Array)
], PatientFile.prototype, "admissions", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                date: { type: Date, required: true },
                fromUnit: { type: mongoose_2.Types.ObjectId, ref: "Unit" },
                reasonOfDischarge: {
                    enum: ["Improvement", "Deceased", "Own request"],
                    required: true,
                },
                requestedBy: { type: mongoose_2.Types.ObjectId, ref: "Employee", required: true },
                isApproved: { type: Boolean, default: false },
                approvedBy: { type: mongoose_2.Types.ObjectId, ref: "Employee" },
            },
        ],
    }),
    __metadata("design:type", Array)
], PatientFile.prototype, "discharges", void 0);
exports.PatientFile = PatientFile = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], PatientFile);
exports.PatientFileSchema = mongoose_1.SchemaFactory.createForClass(PatientFile);
exports.PatientFileSchema.index({ patient: 1, hospital: 1 }, { unique: true });
exports.PatientFileModule = mongoose_1.MongooseModule.forFeature([{ name: PatientFile.name, schema: exports.PatientFileSchema }], types_1.connectionNameString.HOSPITAL);
//# sourceMappingURL=patient.file.schema.js.map