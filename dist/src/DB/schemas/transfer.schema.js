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
exports.TransferModule = exports.TransferSchema = exports.Transfer = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../../common");
const mongoose_2 = require("mongoose");
let Transfer = class Transfer extends common_1.CommonProps {
    transferFrom;
    transferTo;
    status;
};
exports.Transfer = Transfer;
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Unit",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Transfer.prototype, "transferFrom", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Unit",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Transfer.prototype, "transferTo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: common_1._Types.TransferStatusType,
        default: common_1._Types.TransferStatusType.PENDING,
    }),
    __metadata("design:type", String)
], Transfer.prototype, "status", void 0);
exports.Transfer = Transfer = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], Transfer);
exports.TransferSchema = mongoose_1.SchemaFactory.createForClass(Transfer);
exports.TransferModule = mongoose_1.MongooseModule.forFeature([
    { name: Transfer.name, schema: exports.TransferSchema },
]);
//# sourceMappingURL=transfer.schema.js.map