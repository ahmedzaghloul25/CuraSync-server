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
exports.DisposableCatalogModule = exports.DisposableCatalogSchema = exports.DisposableCatalog = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const types_1 = require("../../../../common/types");
const utils_1 = require("../../../../common/utils");
const mongoose_2 = require("mongoose");
let DisposableCatalog = class DisposableCatalog {
    name;
    slug;
    addedByHospitalId;
    addedByEmployeeId;
    isConfirmed;
    confirmedBy;
    isFreezed;
    freezedBy;
    modifiedBy;
};
exports.DisposableCatalog = DisposableCatalog;
__decorate([
    (0, mongoose_1.Prop)({
        minlength: 2,
        maxlength: 100,
        trim: true,
        required: true,
    }),
    __metadata("design:type", String)
], DisposableCatalog.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        unique: true,
    }),
    __metadata("design:type", String)
], DisposableCatalog.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], DisposableCatalog.prototype, "addedByHospitalId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], DisposableCatalog.prototype, "addedByEmployeeId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], DisposableCatalog.prototype, "isConfirmed", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], DisposableCatalog.prototype, "confirmedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], DisposableCatalog.prototype, "isFreezed", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], DisposableCatalog.prototype, "freezedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], DisposableCatalog.prototype, "modifiedBy", void 0);
exports.DisposableCatalog = DisposableCatalog = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], DisposableCatalog);
exports.DisposableCatalogSchema = mongoose_1.SchemaFactory.createForClass(DisposableCatalog);
exports.DisposableCatalogSchema.pre("save", function (next) {
    this.slug = (0, utils_1._slugify)(this.name);
    next();
});
exports.DisposableCatalogModule = mongoose_1.MongooseModule.forFeature([{ name: DisposableCatalog.name, schema: exports.DisposableCatalogSchema }], types_1.connectionNameString.CATALOG);
//# sourceMappingURL=catalog.disposable.schema.js.map