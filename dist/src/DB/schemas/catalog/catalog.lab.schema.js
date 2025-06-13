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
exports.LabCatalogModule = exports.LabCatalogSchema = exports.LabCatalog = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const props_1 = require("../../../../common/props");
const types_1 = require("../../../../common/types");
const utils_1 = require("../../../../common/utils");
let LabCatalog = class LabCatalog extends props_1.CatalogProps {
    name;
    slug;
    code;
    loincCode;
    category;
    description;
    specimenType;
    specimenRequirements;
    processingTime;
    referenceValues;
    requiresConsent;
    requiredFasting;
};
exports.LabCatalog = LabCatalog;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], LabCatalog.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        unique: true
    }),
    __metadata("design:type", String)
], LabCatalog.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], LabCatalog.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LabCatalog.prototype, "loincCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: types_1.LAbTestCategory,
        required: true,
    }),
    __metadata("design:type", String)
], LabCatalog.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LabCatalog.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: types_1.SpecimenType,
        required: true,
    }),
    __metadata("design:type", String)
], LabCatalog.prototype, "specimenType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LabCatalog.prototype, "specimenRequirements", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LabCatalog.prototype, "processingTime", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LabCatalog.prototype, "referenceValues", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], LabCatalog.prototype, "requiresConsent", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], LabCatalog.prototype, "requiredFasting", void 0);
exports.LabCatalog = LabCatalog = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], LabCatalog);
exports.LabCatalogSchema = mongoose_1.SchemaFactory.createForClass(LabCatalog);
exports.LabCatalogSchema.pre("save", function (next) {
    this.slug = (0, utils_1._slugify)(this.name);
    next();
});
exports.LabCatalogModule = mongoose_1.MongooseModule.forFeature([{ name: LabCatalog.name, schema: exports.LabCatalogSchema }], types_1.connectionNameString.CATALOG);
//# sourceMappingURL=catalog.lab.schema.js.map