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
exports.UnitModule = exports.UnitSchema = exports.Unit = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../../common");
const mongoose_2 = require("mongoose");
let Unit = class Unit extends common_1.CommonProps {
    name;
    description;
    bedCount;
    department;
};
exports.Unit = Unit;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: common_1._Types.AllUnits
    }),
    __metadata("design:type", String)
], Unit.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        minlength: 3,
        maxlength: 400,
    }),
    __metadata("design:type", String)
], Unit.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        min: 0,
        max: 100
    }),
    __metadata("design:type", Number)
], Unit.prototype, "bedCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: 'Department',
        required: true
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Unit.prototype, "department", void 0);
exports.Unit = Unit = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], Unit);
exports.UnitSchema = mongoose_1.SchemaFactory.createForClass(Unit);
exports.UnitModule = mongoose_1.MongooseModule.forFeature([
    { name: Unit.name, schema: exports.UnitSchema }
]);
//# sourceMappingURL=unit.schema.js.map