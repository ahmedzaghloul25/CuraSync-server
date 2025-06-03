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
exports.hospitalModule = exports.HospitalSchema = exports.Hospital = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constants_1 = require("../../../../common/constants");
const props_1 = require("../../../../common/props");
const types_1 = require("../../../../common/types");
let Hospital = class Hospital extends props_1.ConfirmableProps {
    name;
    slug;
    address;
    medicalLicenseNumber;
    medicalLicenseExpiry;
    commercialRegNumber;
    commercialRegExpiry;
    TIN;
    medicalLicenseDoc;
    commercialRegDoc;
    TINdoc;
    logo;
};
exports.Hospital = Hospital;
__decorate([
    (0, mongoose_1.Prop)({
        unique: true,
        required: true,
        trim: true,
        minlength: constants_1.MIN_MAX_LENGTH.nameMinInput,
        maxlength: constants_1.MIN_MAX_LENGTH.nameMaxInput,
    }),
    __metadata("design:type", String)
], Hospital.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], Hospital.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        minlength: constants_1.MIN_MAX_LENGTH.descMinInput,
        maxlength: constants_1.MIN_MAX_LENGTH.descMaxInput,
    }),
    __metadata("design:type", String)
], Hospital.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        unique: true,
    }),
    __metadata("design:type", String)
], Hospital.prototype, "medicalLicenseNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Date)
], Hospital.prototype, "medicalLicenseExpiry", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        unique: true,
    }),
    __metadata("design:type", String)
], Hospital.prototype, "commercialRegNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Date)
], Hospital.prototype, "commercialRegExpiry", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        unique: true,
    }),
    __metadata("design:type", String)
], Hospital.prototype, "TIN", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: { secure_url: String, Public_id: String },
        required: true
    }),
    __metadata("design:type", Object)
], Hospital.prototype, "medicalLicenseDoc", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: { secure_url: String, Public_id: String },
        required: true
    }),
    __metadata("design:type", Object)
], Hospital.prototype, "commercialRegDoc", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: { secure_url: String, Public_id: String },
        required: true
    }),
    __metadata("design:type", Object)
], Hospital.prototype, "TINdoc", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: { secure_url: String, Public_id: String },
    }),
    __metadata("design:type", Object)
], Hospital.prototype, "logo", void 0);
exports.Hospital = Hospital = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], Hospital);
exports.HospitalSchema = mongoose_1.SchemaFactory.createForClass(Hospital);
exports.hospitalModule = mongoose_1.MongooseModule.forFeature([{ name: Hospital.name, schema: exports.HospitalSchema }], types_1.TYPES.connectionNameString.HOSPITAL);
//# sourceMappingURL=hospital.schema.js.map