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
exports.TransferModule = exports.TransferSchema = exports.PatientTransfer = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const types_1 = require("../../../../common/types");
const mongoose_2 = require("mongoose");
let PatientTransfer = class PatientTransfer {
    requestedBy;
    isConfirmed;
    confirmedBy;
    transferFrom;
    transferTo;
    status;
    hospital;
};
exports.PatientTransfer = PatientTransfer;
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientTransfer.prototype, "requestedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], PatientTransfer.prototype, "isConfirmed", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientTransfer.prototype, "confirmedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Unit",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientTransfer.prototype, "transferFrom", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Unit",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientTransfer.prototype, "transferTo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: types_1.TransferStatusType,
        default: types_1.TransferStatusType.PENDING,
    }),
    __metadata("design:type", String)
], PatientTransfer.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Hospital",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], PatientTransfer.prototype, "hospital", void 0);
exports.PatientTransfer = PatientTransfer = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], PatientTransfer);
exports.TransferSchema = mongoose_1.SchemaFactory.createForClass(PatientTransfer);
exports.TransferModule = mongoose_1.MongooseModule.forFeature([{ name: PatientTransfer.name, schema: exports.TransferSchema }], types_1.connectionNameString.HOSPITAL);
//# sourceMappingURL=patient.transfer.schema.js.map