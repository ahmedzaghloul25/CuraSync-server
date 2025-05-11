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
exports.ServiceModule = exports.ServiceRecordSchema = exports.ServiceRecord = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../../common");
let ServiceRecord = class ServiceRecord extends common_1.CommonProps {
    quantity;
    status;
    notes;
};
exports.ServiceRecord = ServiceRecord;
__decorate([
    (0, mongoose_1.Prop)({
        min: 0,
        default: 1,
    }),
    __metadata("design:type", Number)
], ServiceRecord.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: common_1._Types.ServiceRecordTypes,
        default: common_1._Types.ServiceRecordTypes.PENDING,
    }),
    __metadata("design:type", String)
], ServiceRecord.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        minlength: 2,
        maxlength: 500,
    }),
    __metadata("design:type", String)
], ServiceRecord.prototype, "notes", void 0);
exports.ServiceRecord = ServiceRecord = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], ServiceRecord);
exports.ServiceRecordSchema = mongoose_1.SchemaFactory.createForClass(ServiceRecord);
exports.ServiceModule = mongoose_1.MongooseModule.forFeature([
    { name: ServiceRecord.name, schema: exports.ServiceRecordSchema }
]);
//# sourceMappingURL=serviceRecord.schema.js.map