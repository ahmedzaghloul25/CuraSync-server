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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const hospital_emp_repoService_1 = require("../DB/repository/hospital/hospital.emp.repoService");
const services_1 = require("../../common/services");
const common_2 = require("../../common");
const event_emitter_1 = require("@nestjs/event-emitter");
const fakeDelay_1 = require("../../common/utils/fakeDelay");
let AuthService = class AuthService {
    employeeRepoService;
    hashing;
    otp;
    event;
    constructor(employeeRepoService, hashing, otp, event) {
        this.employeeRepoService = employeeRepoService;
        this.hashing = hashing;
        this.otp = otp;
        this.event = event;
    }
    async signup(body) {
        try {
            body.password = this.hashing.createHash(body.password);
            const employee = (await this.employeeRepoService.create({
                ...body,
            }));
            const { otp, otpExpire } = this.otp.create();
            await this.employeeRepoService.updateOne({ _id: employee._id }, {
                otp: this.hashing.createHash(otp),
                otpExpireAt: otpExpire,
                otpFor: common_2._Types.TYPES.OtpType.CONFIRM_MAIL,
            });
            const options = {
                to: employee.email,
                subject: "Verify your email",
                html: `<p>Please use OTP <b>${otp}</b> to verify your email within 15 minutes</p>`,
            };
            this.event.emit("sendOtp", options);
            return { message: "success", employee };
        }
        catch (error) {
            if (error.errorResponse.code === 11000) {
                throw new common_1.UnauthorizedException("Email already registered");
            }
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async confirmEmail(body) {
        const employee = await this.employeeRepoService.findOne({
            email: body.email,
        });
        if (!employee || employee.isEmailConfirmed) {
            throw new common_1.UnauthorizedException("Email or OTP not valid");
        }
        const otpVerify = await this.otp.verify(employee, body.otp);
        if (!otpVerify || employee.otpFor !== common_2._Types.TYPES.OtpType.CONFIRM_MAIL) {
            throw new common_1.NotAcceptableException("Invalid OTP.");
        }
        await this.employeeRepoService.updateOne({ _id: employee._id }, {
            isEmailConfirmed: true,
            $unset: { otp: "", otpExpireAt: "", otpFor: "" },
        });
        return { message: "Email confirmed successfully" };
    }
    async requestNewOtp(body) {
        const employee = await this.employeeRepoService.findOne({
            email: body.email,
        });
        if (!employee) {
            await (0, fakeDelay_1.fakeDelay)(200);
            return { message: "Check your Inbox in case of valid Email" };
        }
        if (employee.otpExpireAt > new Date()) {
            throw new common_1.UnauthorizedException("OTP is not expired yet");
        }
        if (employee.isEmailConfirmed &&
            body.otpFor === common_2._Types.TYPES.OtpType.CONFIRM_MAIL) {
            throw new common_1.ConflictException("Email already confirmed");
        }
        const { otp, otpExpire } = this.otp.create();
        await this.employeeRepoService.updateOne({ _id: employee._id }, {
            otp: this.hashing.createHash(otp),
            otpExpireAt: otpExpire,
            otpFor: body.otpFor,
        });
        const options = {
            to: employee.email,
            subject: `${body.otpFor}`,
            html: `<p>Please use OTP <b>${otp}</b> to ${body.otpFor} within 15 minutes</p>`,
        };
        this.event.emit("sendOtp", options);
        return { message: "Check your Inbox in case of valid Email" };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [hospital_emp_repoService_1.EmployeeRepoService,
        services_1.Hashing,
        services_1.Otp,
        event_emitter_1.EventEmitter2])
], AuthService);
//# sourceMappingURL=auth.service.js.map