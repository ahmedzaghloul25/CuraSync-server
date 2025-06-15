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
exports.employeeModule = exports.EmployeeSchema = exports.Employee = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constants_1 = require("../../../../common/constants");
const types_1 = require("../../../../common/types");
const mongoose_2 = require("mongoose");
let Employee = class Employee {
    firstName;
    lastName;
    email;
    password;
    occupation;
    phone;
    DOB;
    isEmailConfirmed;
    otp;
    otpFor;
    otpExpireAt;
    passwordChangedAt;
    fullName;
    hospital;
    createdBy;
    isFreezed;
    freezedBy;
};
exports.Employee = Employee;
__decorate([
    (0, mongoose_1.Prop)({
        trim: true,
        required: true,
        minlength: constants_1.MIN_MAX_LENGTH.nameMinInput,
        maxlength: constants_1.MIN_MAX_LENGTH.nameMaxInput,
    }),
    __metadata("design:type", String)
], Employee.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        trim: true,
        required: true,
        minlength: constants_1.MIN_MAX_LENGTH.nameMinInput,
        maxlength: constants_1.MIN_MAX_LENGTH.nameMaxInput,
    }),
    __metadata("design:type", String)
], Employee.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Employee.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Employee.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Employee.prototype, "occupation", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        match: /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g,
    }),
    __metadata("design:type", String)
], Employee.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Date)
], Employee.prototype, "DOB", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: false,
    }),
    __metadata("design:type", Boolean)
], Employee.prototype, "isEmailConfirmed", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Employee.prototype, "otp", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: types_1.OtpType,
    }),
    __metadata("design:type", String)
], Employee.prototype, "otpFor", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Employee.prototype, "otpExpireAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Employee.prototype, "passwordChangedAt", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return `${this.firstName} ${this.lastName}`;
        },
    }),
    __metadata("design:type", String)
], Employee.prototype, "fullName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Hospital",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Employee.prototype, "hospital", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: "Employee",
        required: true,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Employee.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Employee.prototype, "isFreezed", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: "Employee",
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Employee.prototype, "freezedBy", void 0);
exports.Employee = Employee = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], Employee);
exports.EmployeeSchema = mongoose_1.SchemaFactory.createForClass(Employee);
exports.EmployeeSchema.index({ email: 1, hospital: 1 }, { unique: true });
exports.employeeModule = mongoose_1.MongooseModule.forFeature([{ name: Employee.name, schema: exports.EmployeeSchema }], types_1.connectionNameString.HOSPITAL);
//# sourceMappingURL=hospital.employee.schema.js.map