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
exports.HospitalDepartmentModule = exports.HospitalDepartmentSchema = exports.HospitalDepartment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const props_1 = require("../../../../common/props");
const types_1 = require("../../../../common/types");
const mongoose_2 = require("mongoose");
let HospitalDepartment = class HospitalDepartment extends props_1.ConfirmableProps {
    catalogId;
    head;
    hospital;
};
exports.HospitalDepartment = HospitalDepartment;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalDepartment.prototype, "catalogId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalDepartment.prototype, "head", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Hospital",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], HospitalDepartment.prototype, "hospital", void 0);
exports.HospitalDepartment = HospitalDepartment = __decorate([
    (0, mongoose_1.Schema)({
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true,
    })
], HospitalDepartment);
exports.HospitalDepartmentSchema = mongoose_1.SchemaFactory.createForClass(HospitalDepartment);
exports.HospitalDepartmentSchema.index({ catalogId: 1, hospital: 1 }, { unique: true });
exports.HospitalDepartmentModule = mongoose_1.MongooseModule.forFeature([{ name: HospitalDepartment.name, schema: exports.HospitalDepartmentSchema }], types_1.TYPES.connectionNameString.HOSPITAL);
//# sourceMappingURL=hospital.department.schema.js.map