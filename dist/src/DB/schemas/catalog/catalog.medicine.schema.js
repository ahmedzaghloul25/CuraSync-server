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
exports.MedicineCatalogModule = exports.MedicineCatalogSchema = exports.MedicineCatalog = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const props_1 = require("../../../../common/props");
const types_1 = require("../../../../common/types");
let MedicineCatalog = class MedicineCatalog extends props_1.CatalogProps {
    genericName;
    brandName;
    form;
    unit;
    pharmaceuticalForm;
    concentration;
};
exports.MedicineCatalog = MedicineCatalog;
__decorate([
    (0, mongoose_1.Prop)({
        minlength: 2,
        maxlength: 100,
        unique: true,
        trim: true,
        required: true,
    }),
    __metadata("design:type", String)
], MedicineCatalog.prototype, "genericName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], MedicineCatalog.prototype, "brandName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: types_1.MedicationForm,
        required: true,
    }),
    __metadata("design:type", String)
], MedicineCatalog.prototype, "form", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: types_1.MedicineUnits,
        required: true,
    }),
    __metadata("design:type", String)
], MedicineCatalog.prototype, "unit", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    __metadata("design:type", String)
], MedicineCatalog.prototype, "concentration", void 0);
exports.MedicineCatalog = MedicineCatalog = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], MedicineCatalog);
exports.MedicineCatalogSchema = mongoose_1.SchemaFactory.createForClass(MedicineCatalog);
exports.MedicineCatalogModule = mongoose_1.MongooseModule.forFeature([{ name: MedicineCatalog.name, schema: exports.MedicineCatalogSchema }], types_1.connectionNameString.CATALOG);
//# sourceMappingURL=catalog.medicine.schema.js.map