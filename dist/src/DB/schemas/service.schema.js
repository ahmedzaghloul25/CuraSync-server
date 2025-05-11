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
exports.ServiceModule = exports.ServiceSchema = exports.Service = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../../common");
let Service = class Service extends common_1.CommonProps {
    name;
    type;
    price;
};
exports.Service = Service;
__decorate([
    (0, mongoose_1.Prop)({
        minlength: 2,
        maxlength: 100,
        unique: true,
        trim: true,
        required: true,
    }),
    __metadata("design:type", String)
], Service.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: common_1._Types.ServiceTypes,
        required: true,
    }),
    __metadata("design:type", String)
], Service.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 1,
        required: true,
    }),
    __metadata("design:type", Object)
], Service.prototype, "price", void 0);
exports.Service = Service = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], Service);
exports.ServiceSchema = mongoose_1.SchemaFactory.createForClass(Service);
exports.ServiceModule = mongoose_1.MongooseModule.forFeature([
    { name: Service.name, schema: exports.ServiceSchema },
]);
//# sourceMappingURL=service.schema.js.map