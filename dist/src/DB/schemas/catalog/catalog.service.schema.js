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
exports.ServiceCatalogModule = exports.ServiceCatalogSchema = exports.ServiceCatalog = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../../../common");
let ServiceCatalog = class ServiceCatalog extends common_1.COMMON_PROPS.CatalogProps {
    name;
    slug;
    description;
};
exports.ServiceCatalog = ServiceCatalog;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        unique: true,
        trim: true,
    }),
    __metadata("design:type", String)
], ServiceCatalog.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        unique: true,
    }),
    __metadata("design:type", String)
], ServiceCatalog.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        minlength: 3,
        maxlength: 400,
    }),
    __metadata("design:type", String)
], ServiceCatalog.prototype, "description", void 0);
exports.ServiceCatalog = ServiceCatalog = __decorate([
    (0, mongoose_1.Schema)()
], ServiceCatalog);
exports.ServiceCatalogSchema = mongoose_1.SchemaFactory.createForClass(ServiceCatalog);
exports.ServiceCatalogModule = mongoose_1.MongooseModule.forFeature([{ name: ServiceCatalog.name, schema: exports.ServiceCatalogSchema }], common_1._Types.TYPES.connectionNameString.CATALOG);
//# sourceMappingURL=catalog.service.schema.js.map