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
exports.Otp = void 0;
const nanoid_1 = require("nanoid");
const common_1 = require("@nestjs/common");
const hashing_1 = require("./hashing");
let Otp = class Otp {
    hashServices;
    constructor(hashServices) {
        this.hashServices = hashServices;
    }
    create() {
        const createOtp = (0, nanoid_1.customAlphabet)("0123456789", 6);
        const otp = createOtp();
        const otpExpire = new Date(Date.now() + 15 * 60 * 1000);
        return { otp, otpExpire };
    }
    verify(employee, otp) {
        if (employee.otpExpireAt < new Date()) {
            throw new common_1.UnauthorizedException("OTP expired.");
        }
        const result = this.hashServices.verifyHash(otp, employee.otp);
        return result;
    }
};
exports.Otp = Otp;
exports.Otp = Otp = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [hashing_1.Hashing])
], Otp);
//# sourceMappingURL=otp.js.map