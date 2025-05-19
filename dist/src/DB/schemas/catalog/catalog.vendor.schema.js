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
exports.VendorCatalogModule = exports.VendorCatalogSchema = exports.VendorCatalog = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../../../common");
const utils_1 = require("../../../../common/utils");
let VendorCatalog = class VendorCatalog extends common_1.COMMON_PROPS.CatalogProps {
    name;
    slug;
    phone;
    address;
    email;
    commercialRegNum;
    TIN;
};
exports.VendorCatalog = VendorCatalog;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        unique: true,
        trim: true,
    }),
    __metadata("design:type", String)
], VendorCatalog.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], VendorCatalog.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        unique: true,
    }),
    __metadata("design:type", String)
], VendorCatalog.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        minlength: 3,
        maxlength: 400,
    }),
    __metadata("design:type", String)
], VendorCatalog.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        unique: true,
    }),
    __metadata("design:type", String)
], VendorCatalog.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        unique: true,
    }),
    __metadata("design:type", String)
], VendorCatalog.prototype, "commercialRegNum", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        unique: true,
    }),
    __metadata("design:type", String)
], VendorCatalog.prototype, "TIN", void 0);
exports.VendorCatalog = VendorCatalog = __decorate([
    (0, mongoose_1.Schema)()
], VendorCatalog);
exports.VendorCatalogSchema = mongoose_1.SchemaFactory.createForClass(VendorCatalog);
exports.VendorCatalogSchema.pre("save", function (next) {
    this.slug = (0, utils_1._slugify)(this.name);
    next();
});
exports.VendorCatalogModule = mongoose_1.MongooseModule.forFeature([{ name: VendorCatalog.name, schema: exports.VendorCatalogSchema }], common_1._Types.TYPES.connectionNameString.CATALOG);
//# sourceMappingURL=catalog.vendor.schema.js.map