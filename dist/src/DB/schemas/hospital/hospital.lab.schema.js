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
exports.HospitalLabModule = exports.HospitalLabSchema = exports.HospitalLab = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const types_1 = require("../../../../common/types");
const mongoose_2 = require("mongoose");
let HospitalLab = class HospitalLab {
    labCatalogId;
    price;
    isActive;
    hospital;
    createdBy;
    isFreezed;
    freezedBy;
    isConfirmed;
    confirmedBy;
};
exports.HospitalLab = HospitalLab;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalLab.prototype, "labCatalogId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 1,
    }),
    __metadata("design:type", Number)
], HospitalLab.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: true,
    }),
    __metadata("design:type", Boolean)
], HospitalLab.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Hospital",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalLab.prototype, "hospital", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: "Employee",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalLab.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], HospitalLab.prototype, "isFreezed", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalLab.prototype, "freezedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], HospitalLab.prototype, "isConfirmed", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalLab.prototype, "confirmedBy", void 0);
exports.HospitalLab = HospitalLab = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], HospitalLab);
exports.HospitalLabSchema = mongoose_1.SchemaFactory.createForClass(HospitalLab);
exports.HospitalLabSchema.index({ labCatalogId: 1, hospital: 1 }, { unique: true });
exports.HospitalLabModule = mongoose_1.MongooseModule.forFeature([{ name: HospitalLab.name, schema: exports.HospitalLabSchema }], types_1.connectionNameString.HOSPITAL);
//# sourceMappingURL=hospital.lab.schema.js.map