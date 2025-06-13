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
exports.UnitCatalogModule = exports.UnitCatalogSchema = exports.UnitCatalog = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const props_1 = require("../../../../common/props");
const types_1 = require("../../../../common/types");
const utils_1 = require("../../../../common/utils");
let UnitCatalog = class UnitCatalog extends props_1.CatalogProps {
    name;
    slug;
    description;
    departmentSlug;
};
exports.UnitCatalog = UnitCatalog;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    __metadata("design:type", String)
], UnitCatalog.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        unique: true,
    }),
    __metadata("design:type", String)
], UnitCatalog.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        minlength: 3,
        maxlength: 400,
    }),
    __metadata("design:type", String)
], UnitCatalog.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], UnitCatalog.prototype, "departmentSlug", void 0);
exports.UnitCatalog = UnitCatalog = __decorate([
    (0, mongoose_1.Schema)()
], UnitCatalog);
exports.UnitCatalogSchema = mongoose_1.SchemaFactory.createForClass(UnitCatalog);
exports.UnitCatalogSchema.pre("save", function (next) {
    this.slug = (0, utils_1._slugify)(this.name);
    next();
});
exports.UnitCatalogModule = mongoose_1.MongooseModule.forFeature([{ name: UnitCatalog.name, schema: exports.UnitCatalogSchema }], types_1.connectionNameString.CATALOG);
//# sourceMappingURL=catalog.unit.schema.js.map