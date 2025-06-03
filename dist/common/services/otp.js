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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Otp = void 0;
const nanoid_1 = require("nanoid");
const common_1 = require("@nestjs/common");
const hashing_1 = require("./hashing");
const hospital_emp_repoService_1 = require("../../src/DB/repository/hospital/hospital.emp.repoService");
const constants_1 = require("../constants");
let Otp = class Otp {
    employeeRepoService;
    hashing;
    constructor(employeeRepoService, hashing) {
        this.employeeRepoService = employeeRepoService;
        this.hashing = hashing;
    }
    create() {
        const createOtp = (0, nanoid_1.customAlphabet)("0123456789", constants_1.MIN_MAX_LENGTH.otpLength);
        const otp = createOtp();
        const otpExpire = new Date(Date.now() + 15 * 60 * 1000);
        return { otp, otpExpire };
    }
    async verify(employee, otp) {
        if (employee.otpExpireAt < new Date()) {
            await this.employeeRepoService.updateOne({ _id: employee._id }, {
                $unset: { otp: "", otpExpireAt: "", otpFor: "" },
            });
            throw new common_1.UnauthorizedException("OTP expired.");
        }
        const result = this.hashing.verifyHash(otp, employee.otp);
        return result;
    }
};
exports.Otp = Otp;
exports.Otp = Otp = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => hospital_emp_repoService_1.EmployeeRepoService))),
    __metadata("design:paramtypes", [hospital_emp_repoService_1.EmployeeRepoService,
        hashing_1.Hashing])
], Otp);
//# sourceMappingURL=otp.js.map