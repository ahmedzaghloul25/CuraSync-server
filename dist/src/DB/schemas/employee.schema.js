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
exports.EmployeeModule = exports.EmployeeSchema = exports.Employee = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../../common");
let Employee = class Employee extends common_1.CommonProps {
    firstName;
    lastName;
    email;
    password;
    jobCategory;
    role;
    occupation;
    phone;
    DOB;
    otp;
    otpFor;
    otpExpireAt;
    fullName;
};
exports.Employee = Employee;
__decorate([
    (0, mongoose_1.Prop)({
        trim: true,
        required: true,
        minlength: common_1.MIN_MAX_LENGTH.nameMinInput,
        maxlength: common_1.MIN_MAX_LENGTH.nameMaxInput,
    }),
    __metadata("design:type", String)
], Employee.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        trim: true,
        required: true,
        minlength: common_1.MIN_MAX_LENGTH.nameMinInput,
        maxlength: common_1.MIN_MAX_LENGTH.nameMaxInput,
    }),
    __metadata("design:type", String)
], Employee.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        unique: true,
    }),
    __metadata("design:type", String)
], Employee.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        minlength: common_1.MIN_MAX_LENGTH.passwordMinLength,
    }),
    __metadata("design:type", String)
], Employee.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: common_1._Types.JobCategoryTypes,
        required: true,
    }),
    __metadata("design:type", String)
], Employee.prototype, "jobCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: common_1._Types.RoleEnum,
        default: common_1._Types.RoleEnum.PENDING
    }),
    __metadata("design:type", String)
], Employee.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: common_1._Types.AllOccupations,
        required: true,
    }),
    __metadata("design:type", String)
], Employee.prototype, "occupation", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        length: common_1.MIN_MAX_LENGTH.phoneNumLength,
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
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Employee.prototype, "otp", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: common_1._Types.OtpType,
    }),
    __metadata("design:type", String)
], Employee.prototype, "otpFor", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Employee.prototype, "otpExpireAt", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return `${this.firstName} ${this.lastName}`;
        },
    }),
    __metadata("design:type", String)
], Employee.prototype, "fullName", void 0);
exports.Employee = Employee = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })
], Employee);
exports.EmployeeSchema = mongoose_1.SchemaFactory.createForClass(Employee);
exports.EmployeeModule = mongoose_1.MongooseModule.forFeature([
    { name: Employee.name, schema: exports.EmployeeSchema },
]);
//# sourceMappingURL=employee.schema.js.map