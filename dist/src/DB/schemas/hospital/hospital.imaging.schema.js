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
exports.HospitalImagingModule = exports.HospitalImagingSchema = exports.HospitalImaging = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const types_1 = require("../../../../common/types");
const mongoose_2 = require("mongoose");
let HospitalImaging = class HospitalImaging {
    imagingCatalogId;
    price;
    hospital;
    createdBy;
    isFreezed;
    freezedBy;
    isConfirmed;
    confirmedBy;
};
exports.HospitalImaging = HospitalImaging;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalImaging.prototype, "imagingCatalogId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        min: 0,
    }),
    __metadata("design:type", Number)
], HospitalImaging.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        ref: "Hospital",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalImaging.prototype, "hospital", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: "Employee",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalImaging.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], HospitalImaging.prototype, "isFreezed", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalImaging.prototype, "freezedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], HospitalImaging.prototype, "isConfirmed", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalImaging.prototype, "confirmedBy", void 0);
exports.HospitalImaging = HospitalImaging = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], HospitalImaging);
exports.HospitalImagingSchema = mongoose_1.SchemaFactory.createForClass(HospitalImaging);
exports.HospitalImagingSchema.index({ imagingCatalogId: 1, hospital: 1 }, { unique: true });
exports.HospitalImagingModule = mongoose_1.MongooseModule.forFeature([{ name: HospitalImaging.name, schema: exports.HospitalImagingSchema }], types_1.connectionNameString.HOSPITAL);
//# sourceMappingURL=hospital.imaging.schema.js.map