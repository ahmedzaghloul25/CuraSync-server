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
exports.HospitalDisposableModule = exports.HospitalDisposableSchema = exports.HospitalDisposable = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const props_1 = require("../../../../common/props");
const types_1 = require("../../../../common/types");
const mongoose_2 = require("mongoose");
let HospitalDisposable = class HospitalDisposable extends props_1.ConfirmableProps {
    disposableCatalogId;
    price;
    hospital;
    inventory;
};
exports.HospitalDisposable = HospitalDisposable;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalDisposable.prototype, "disposableCatalogId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 1,
        required: true,
    }),
    __metadata("design:type", Number)
], HospitalDisposable.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Hospital",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalDisposable.prototype, "hospital", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 0,
        required: true,
    }),
    __metadata("design:type", Number)
], HospitalDisposable.prototype, "inventory", void 0);
exports.HospitalDisposable = HospitalDisposable = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], HospitalDisposable);
exports.HospitalDisposableSchema = mongoose_1.SchemaFactory.createForClass(HospitalDisposable);
exports.HospitalDisposableSchema.index({ catalogId: 1, hospital: 1 }, { unique: true });
exports.HospitalDisposableModule = mongoose_1.MongooseModule.forFeature([{ name: HospitalDisposable.name, schema: exports.HospitalDisposableSchema }], types_1.TYPES.connectionNameString.HOSPITAL);
//# sourceMappingURL=hospital.disposable.schema.js.map