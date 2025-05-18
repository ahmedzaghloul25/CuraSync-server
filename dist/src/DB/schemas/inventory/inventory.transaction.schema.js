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
exports.MedicineTransactionModule = exports.MedicineTransactionSchema = exports.InventoryTransaction = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../../../common");
const mongoose_2 = require("mongoose");
let InventoryTransaction = class InventoryTransaction extends common_1.COMMON_PROPS.ConfirmableProps {
    medicine;
    labItem;
    disposableItem;
    imagingItem;
    hospital;
    forItem;
    transactionType;
    procurementQuantity;
    batchNumber;
    expiryDate;
    invoiceNumber;
    invoiceDate;
    vendorId;
    returnedQuantity;
    returnReason;
    originalDispenseTransactionId;
    dispensedQuantity;
    orderNumber;
    unitId;
    patientId;
    notes;
};
exports.InventoryTransaction = InventoryTransaction;
__decorate([
    (0, mongoose_1.Prop)({
        ref: "HospitalMedicine",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], InventoryTransaction.prototype, "medicine", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "HospitalLab",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], InventoryTransaction.prototype, "labItem", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "HospitalDisposable",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], InventoryTransaction.prototype, "disposableItem", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "HospitalImaging",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], InventoryTransaction.prototype, "imagingItem", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        ref: "Hospital",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], InventoryTransaction.prototype, "hospital", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: common_1._Types.TYPES.InventoryItemTypes,
        required: true,
    }),
    __metadata("design:type", String)
], InventoryTransaction.prototype, "forItem", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: common_1._Types.TYPES.TransactionTypes,
    }),
    __metadata("design:type", String)
], InventoryTransaction.prototype, "transactionType", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 0,
        default: 0,
    }),
    __metadata("design:type", Number)
], InventoryTransaction.prototype, "procurementQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], InventoryTransaction.prototype, "batchNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], InventoryTransaction.prototype, "expiryDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], InventoryTransaction.prototype, "invoiceNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], InventoryTransaction.prototype, "invoiceDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], InventoryTransaction.prototype, "vendorId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 0,
        default: 0,
    }),
    __metadata("design:type", Number)
], InventoryTransaction.prototype, "returnedQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], InventoryTransaction.prototype, "returnReason", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "InventoryTransaction",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], InventoryTransaction.prototype, "originalDispenseTransactionId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 0,
        default: 0,
    }),
    __metadata("design:type", Number)
], InventoryTransaction.prototype, "dispensedQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], InventoryTransaction.prototype, "orderNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Unit",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], InventoryTransaction.prototype, "unitId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Patient",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], InventoryTransaction.prototype, "patientId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], InventoryTransaction.prototype, "notes", void 0);
exports.InventoryTransaction = InventoryTransaction = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], InventoryTransaction);
exports.MedicineTransactionSchema = mongoose_1.SchemaFactory.createForClass(InventoryTransaction);
exports.MedicineTransactionModule = mongoose_1.MongooseModule.forFeature([{ name: InventoryTransaction.name, schema: exports.MedicineTransactionSchema }], common_1._Types.TYPES.connectionNameString.HOSPITAL);
//# sourceMappingURL=inventory.transaction.schema.js.map