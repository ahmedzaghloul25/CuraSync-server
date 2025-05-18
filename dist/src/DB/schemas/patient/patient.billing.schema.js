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
exports.BillingModule = exports.BillingSchema = exports.Billing = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../../../common");
const mongoose_2 = require("mongoose");
let Billing = class Billing extends common_1.COMMON_PROPS.ConfirmableProps {
    file;
    medicine;
    lab;
    imaging;
    service;
    payable;
    taxRate;
    tax;
    amountPaid;
    status;
};
exports.Billing = Billing;
__decorate([
    (0, mongoose_1.Prop)({
        ref: "File",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Billing.prototype, "file", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "HospitalMedicineOrder",
    }),
    __metadata("design:type", Array)
], Billing.prototype, "medicine", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "HospitalLabOrder",
    }),
    __metadata("design:type", Array)
], Billing.prototype, "lab", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "HospitalImagingOrder",
    }),
    __metadata("design:type", Array)
], Billing.prototype, "imaging", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "HospitalService",
    }),
    __metadata("design:type", Array)
], Billing.prototype, "service", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Object)
], Billing.prototype, "payable", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: 14,
    }),
    __metadata("design:type", Number)
], Billing.prototype, "taxRate", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", Object)
], Billing.prototype, "tax", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Object)
], Billing.prototype, "amountPaid", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: common_1._Types.TYPES.BillingStatusType,
        default: common_1._Types.TYPES.BillingStatusType.PENDING,
    }),
    __metadata("design:type", String)
], Billing.prototype, "status", void 0);
exports.Billing = Billing = __decorate([
    (0, mongoose_1.Schema)()
], Billing);
exports.BillingSchema = mongoose_1.SchemaFactory.createForClass(Billing);
exports.BillingSchema.pre("save", function (next) {
    try {
        if (this.isModified("payable")) {
            const payable = parseFloat(this.payable.toString());
            const taxRate = this.taxRate / 100;
            const tax = payable * taxRate;
            this.set("tax", new mongoose_2.Types.Decimal128(tax.toFixed(2)));
            this.set("amountPaid", new mongoose_2.Types.Decimal128((tax + payable).toFixed(2)));
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.BillingModule = mongoose_1.MongooseModule.forFeature([{ name: Billing.name, schema: exports.BillingSchema }], common_1._Types.TYPES.connectionNameString.HOSPITAL);
//# sourceMappingURL=patient.billing.schema.js.map