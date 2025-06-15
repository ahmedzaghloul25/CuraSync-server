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
const event_emitter_1 = require("@nestjs/event-emitter");
const fakeDelay_1 = require("../../common/utils/fakeDelay");
const jwtToken_1 = require("../../common/services/jwtToken");
const roles_1 = require("../../common/types/roles");
const types_1 = require("../../common/types");
let AuthService = class AuthService {
    employeeRepoService;
    hashing;
    otp;
    event;
    jwtToken;
    logger;
    constructor(employeeRepoService, hashing, otp, event, jwtToken, logger) {
        this.employeeRepoService = employeeRepoService;
        this.hashing = hashing;
        this.otp = otp;
        this.event = event;
        this.jwtToken = jwtToken;
        this.logger = logger;
    }
    async systemAdminSignup(body) {
        try {
            const employee = (await this.employeeRepoService.create({
                ...body,
                occupation: roles_1.AdminRoles.HOSPITAL_ADMINISTRATOR,
            }));
            const { otp, otpExpire } = this.otp.create();
            await this.employeeRepoService.updateOne({ _id: employee._id }, {
                otp: this.hashing.createHash(otp),
                otpExpireAt: otpExpire,
                otpFor: types_1.OtpType.CONFIRM_MAIL,
            });
            const options = {
                to: employee.email,
                subject: "Verify your email",
                html: `<p>Please use OTP <b>${otp}</b> to verify your email within 15 minutes</p>`,
            };
            this.event.emit("sendEmail", options);
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
            otpFor: types_1.OtpType.CONFIRM_MAIL,
        });
        if (!employee || employee.isEmailConfirmed) {
            await (0, fakeDelay_1.fakeDelay)(200);
            throw new common_1.BadRequestException("Invalid Credentials");
        }
        const otpVerify = await this.otp.verify(employee, body.otp);
        if (!otpVerify) {
            await (0, fakeDelay_1.fakeDelay)(200);
            throw new common_1.BadRequestException("Invalid Credentials");
        }
        await this.employeeRepoService.updateOne({ _id: employee._id }, {
            isEmailConfirmed: true,
            $unset: { otp: "", otpExpireAt: "", otpFor: "" },
        });
        return { message: "success", employee: employee._id };
    }
    async requestNewOtp(body) {
        const employee = await this.employeeRepoService.findOne({
            email: body.email,
            isDeleted: { $exists: false },
            otpFor: body.otpFor,
            otpExpireAt: { $lt: new Date() },
        });
        if (!employee) {
            await (0, fakeDelay_1.fakeDelay)(200);
            return { message: "Check your Inbox in case of valid Email" };
        }
        if (employee.isEmailConfirmed &&
            body.otpFor === types_1.OtpType.CONFIRM_MAIL) {
            await (0, fakeDelay_1.fakeDelay)(170);
            return { message: "Check your Inbox in case of valid Email" };
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
        this.event.emit("sendEmail", options);
        return { message: "Check your Inbox in case of valid Email" };
    }
    async login(body, res) {
        const employee = await this.employeeRepoService.findOne({
            email: body.email,
            isEmailConfirmed: true,
            isFreezed: { $exists: false },
        });
        if (!employee ||
            !this.hashing.verifyHash(body.password, employee.password)) {
            throw new common_1.NotFoundException("Email/password not valid or email not confirmed");
        }
        const token = await this.jwtToken.createToken({
            _id: employee._id,
            occupation: employee.occupation,
        });
        res.cookie("auth-token", token, {
            maxAge: 120 * 60 * 1000,
            httpOnly: true,
            sameSite: process.env.MODE === "DEV" ? "lax" : "strict",
            secure: process.env.MODE === "DEV" ? false : true,
        });
        return { message: "success" };
    }
    async forgotPassword({ email }) {
        const employee = await this.employeeRepoService.findOne({
            email,
            isEmailConfirmed: true,
            isFreezed: { $exists: false },
        });
        if (!employee || employee.otpExpireAt > new Date()) {
            this.logger.warn(`[Auth Service] failed attempt to forgotPassword, input: ${email}`, "AuthService");
            await (0, fakeDelay_1.fakeDelay)(200);
            return { message: "OTP sent to your email" };
        }
        const { otp, otpExpire } = this.otp.create();
        await this.employeeRepoService.updateOne({ _id: employee._id }, {
            otp: this.hashing.createHash(otp),
            otpExpireAt: otpExpire,
            otpFor: types_1.OtpType.PASS_RESET,
        });
        const options = {
            to: employee.email,
            subject: types_1.OtpType.PASS_RESET,
            html: `<p>Please use OTP <b>${otp}</b> to ${types_1.OtpType.PASS_RESET} within 15 minutes</p>`,
        };
        this.event.emit("sendEmail", options);
        return { message: "OTP sent to your email" };
    }
    async resetPassword({ email, otp, newPassword }) {
        const employee = await this.employeeRepoService.findOne({
            email,
            isEmailConfirmed: true,
            otpFor: types_1.OtpType.PASS_RESET,
            otpExpireAt: { $gt: new Date() },
        });
        if (!employee || !(await this.otp.verify(employee, otp))) {
            throw new common_1.BadRequestException("Invalid credentials");
        }
        if (this.hashing.compareHash(newPassword, employee.password)) {
            throw new common_1.BadRequestException("Password can't be the same as old one");
        }
        await this.employeeRepoService.updateOne({ _id: employee._id }, {
            password: this.hashing.createHash(newPassword),
            passwordChangedAt: new Date(),
            $unset: { otp: "", otpFor: "", otpExpireAt: "" },
        });
        this.logger.warn(`[Auth Service] password reset for employee: ${employee._id}`, "AuthService");
        return { message: "success" };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [hospital_emp_repoService_1.EmployeeRepoService,
        services_1.Hashing,
        services_1.Otp,
        event_emitter_1.EventEmitter2,
        jwtToken_1.JwtToken,
        common_1.Logger])
], AuthService);
//# sourceMappingURL=auth.service.js.map