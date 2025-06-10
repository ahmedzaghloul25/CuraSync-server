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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const DTO_1 = require("./DTO");
const throttler_1 = require("@nestjs/throttler");
const loginDto_1 = require("./DTO/loginDto");
const forgotPasswordDto_1 = require("./DTO/forgotPasswordDto");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    signup(body) {
        return this.authService.systemAdminSignup(body);
    }
    confirmEmail(Body) {
        return this.authService.confirmEmail(Body);
    }
    requestNewOtp(body) {
        return this.authService.requestNewOtp(body);
    }
    login(body, res) {
        return this.authService.login(body, res);
    }
    forgotPAssword(body) {
        return this.authService.forgotPassword(body);
    }
    resetPassword(body) {
        return this.authService.resetPassword(body);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("signup"),
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiOperation)({ summary: "system admin registration" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "system admin registered successfully",
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DTO_1.SignupDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)("confirm-email"),
    (0, throttler_1.Throttle)({ default: { ttl: (0, throttler_1.minutes)(15), limit: 5 } }),
    (0, swagger_1.ApiOperation)({ summary: "Confirm employee email with OTP" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Email confirmed successfully" }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Invalid OTP or already confirmed" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DTO_1.ConfirmEmailDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "confirmEmail", null);
__decorate([
    (0, common_1.Put)("otp-new"),
    (0, throttler_1.Throttle)({ default: { ttl: (0, throttler_1.minutes)(1), limit: 1 } }),
    (0, swagger_1.ApiOperation)({
        summary: "Request new OTP for email confirmation or password reset",
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "OTP sent if email exists" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DTO_1.RequestNewOtpDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "requestNewOtp", null);
__decorate([
    (0, common_1.Post)("login"),
    (0, swagger_1.ApiOperation)({ summary: "Employee authentication" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Login successful" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Invalid credentials or unconfirmed email" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginDto_1.LoginDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Put)("password-forgot"),
    (0, throttler_1.Throttle)({ default: { ttl: (0, throttler_1.minutes)(1), limit: 1 } }),
    (0, swagger_1.ApiOperation)({ summary: "Initiate password reset process" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Reset OTP sent if email exists" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgotPasswordDto_1.ForgotPasswordDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "forgotPAssword", null);
__decorate([
    (0, common_1.Post)("password-reset"),
    (0, throttler_1.Throttle)({ default: { ttl: (0, throttler_1.minutes)(15), limit: 5 } }),
    (0, swagger_1.ApiOperation)({ summary: "Reset password using OTP" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Password reset successful" }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Invalid OTP or password" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DTO_1.ResetPasswordDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resetPassword", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)("Auth"),
    (0, common_1.Controller)({ version: "1", path: "auth" }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map