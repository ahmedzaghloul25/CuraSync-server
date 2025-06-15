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
exports.ImagingCatalogModule = exports.ImagingCatalogSchema = exports.ImagingCatalog = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const types_1 = require("../../../../common/types");
const utils_1 = require("../../../../common/utils");
const mongoose_2 = require("mongoose");
let ImagingCatalog = class ImagingCatalog {
    name;
    slug;
    code;
    modality;
    bodyRegion;
    description;
    contraindications;
    patientPreparation;
    radiationDose;
    usesContrast;
    contrastDetails;
    requiresConsent;
    addedByHospitalId;
    addedByEmployeeId;
    isConfirmed;
    confirmedBy;
    isFreezed;
    freezedBy;
    modifiedBy;
};
exports.ImagingCatalog = ImagingCatalog;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ImagingCatalog.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        unique: true,
    }),
    __metadata("design:type", String)
], ImagingCatalog.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], ImagingCatalog.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: types_1.ImagingTypes,
    }),
    __metadata("design:type", String)
], ImagingCatalog.prototype, "modality", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: types_1.ImagingBodyRegions,
    }),
    __metadata("design:type", String)
], ImagingCatalog.prototype, "bodyRegion", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ImagingCatalog.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ImagingCatalog.prototype, "contraindications", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ImagingCatalog.prototype, "patientPreparation", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ImagingCatalog.prototype, "radiationDose", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], ImagingCatalog.prototype, "usesContrast", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ImagingCatalog.prototype, "contrastDetails", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], ImagingCatalog.prototype, "requiresConsent", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ImagingCatalog.prototype, "addedByHospitalId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ImagingCatalog.prototype, "addedByEmployeeId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], ImagingCatalog.prototype, "isConfirmed", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ImagingCatalog.prototype, "confirmedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], ImagingCatalog.prototype, "isFreezed", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ImagingCatalog.prototype, "freezedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ImagingCatalog.prototype, "modifiedBy", void 0);
exports.ImagingCatalog = ImagingCatalog = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], ImagingCatalog);
exports.ImagingCatalogSchema = mongoose_1.SchemaFactory.createForClass(ImagingCatalog);
exports.ImagingCatalogSchema.pre("save", function (next) {
    this.slug = (0, utils_1._slugify)(this.name);
    next();
});
exports.ImagingCatalogModule = mongoose_1.MongooseModule.forFeature([{ name: ImagingCatalog.name, schema: exports.ImagingCatalogSchema }], types_1.connectionNameString.CATALOG);
//# sourceMappingURL=catalog.imaging.schema.js.map