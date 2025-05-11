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
exports.DepartmentModule = exports.DepartmentSchema = exports.Department = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../../common");
const mongoose_2 = require("mongoose");
let Department = class Department extends common_1.CommonProps {
    name;
    description;
    head;
};
exports.Department = Department;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: common_1._Types.Departments
    }),
    __metadata("design:type", String)
], Department.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        minlength: 3,
        maxlength: 400,
    }),
    __metadata("design:type", String)
], Department.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Department.prototype, "head", void 0);
exports.Department = Department = __decorate([
    (0, mongoose_1.Schema)({
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true,
    })
], Department);
exports.DepartmentSchema = mongoose_1.SchemaFactory.createForClass(Department);
exports.DepartmentModule = mongoose_1.MongooseModule.forFeature([
    { name: Department.name, schema: exports.DepartmentSchema },
]);
//# sourceMappingURL=department.schema.js.map