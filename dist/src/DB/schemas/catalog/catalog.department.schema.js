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
exports.DepartmentCatalogModule = exports.DepartmentCatalogSchema = exports.DepartmentCatalog = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../../../common");
const utils_1 = require("../../../../common/utils");
let DepartmentCatalog = class DepartmentCatalog extends common_1.COMMON_PROPS.CatalogProps {
    name;
    slug;
    description;
};
exports.DepartmentCatalog = DepartmentCatalog;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    __metadata("design:type", String)
], DepartmentCatalog.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        unique: true
    }),
    __metadata("design:type", String)
], DepartmentCatalog.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        minlength: common_1.CONSTANTS.MIN_MAX_LENGTH.descMinInput,
        maxlength: common_1.CONSTANTS.MIN_MAX_LENGTH.descMaxInput,
    }),
    __metadata("design:type", String)
], DepartmentCatalog.prototype, "description", void 0);
exports.DepartmentCatalog = DepartmentCatalog = __decorate([
    (0, mongoose_1.Schema)()
], DepartmentCatalog);
exports.DepartmentCatalogSchema = mongoose_1.SchemaFactory.createForClass(DepartmentCatalog);
exports.DepartmentCatalogSchema.pre("save", function (next) {
    this.slug = (0, utils_1._slugify)(this.name);
    next();
});
exports.DepartmentCatalogModule = mongoose_1.MongooseModule.forFeature([{ name: DepartmentCatalog.name, schema: exports.DepartmentCatalogSchema }], common_1._Types.TYPES.connectionNameString.CATALOG);
//# sourceMappingURL=catalog.department.schema.js.map