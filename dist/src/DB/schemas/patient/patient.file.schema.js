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
const props_1 = require("../../../../common/props");
const types_1 = require("../../../../common/types");
const mongoose_2 = require("mongoose");
let PatientFile = class PatientFile extends props_1.CoreProps {
    patient;
    hospital;
    status;
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
        enum: types_1.TYPES.FileStatus,
        default: types_1.TYPES.FileStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], PatientFile.prototype, "status", void 0);
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
                    enum: ["Improvement", "deceased"],
                    required: true,
                },
            },
        ],
    }),
    __metadata("design:type", Array)
], PatientFile.prototype, "discharges", void 0);
exports.PatientFile = PatientFile = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], PatientFile);
exports.PatientFileSchema = mongoose_1.SchemaFactory.createForClass(PatientFile);
exports.PatientFileModule = mongoose_1.MongooseModule.forFeature([{ name: PatientFile.name, schema: exports.PatientFileSchema }], types_1.TYPES.connectionNameString.HOSPITAL);
//# sourceMappingURL=patient.file.schema.js.map