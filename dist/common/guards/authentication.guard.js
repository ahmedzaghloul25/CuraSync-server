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
exports.AuthenticationGuard = void 0;
const common_1 = require("@nestjs/common");
const jwtToken_1 = require("../services/jwtToken");
const hospital_emp_repoService_1 = require("../../src/DB/repository/hospital/hospital.emp.repoService");
let AuthenticationGuard = class AuthenticationGuard {
    jwtToken;
    employeeRepoService;
    constructor(jwtToken, employeeRepoService) {
        this.jwtToken = jwtToken;
        this.employeeRepoService = employeeRepoService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = request.cookies["auth-token"];
        if (!token) {
            throw new common_1.UnauthorizedException("token not found");
        }
        try {
            const payload = await this.jwtToken.verifyToken(token);
            const employee = await this.employeeRepoService.findOne({
                _id: payload._id,
                isFreezed: { $exists: false },
            });
            if (!employee) {
                throw new common_1.NotFoundException('Employee not found');
            }
            if (employee?.passwordChangedAt &&
                new Date(payload.iat * 1000) < employee?.passwordChangedAt) {
                throw new common_1.UnauthorizedException("Token invalid due to password change");
            }
            request["employee"] = employee;
            return true;
        }
        catch (error) {
            if (error instanceof common_1.UnauthorizedException) {
                throw error;
            }
            else {
                console.log("authentication error. ", error.message);
                throw new common_1.InternalServerErrorException("Authentication service error");
            }
        }
    }
};
exports.AuthenticationGuard = AuthenticationGuard;
exports.AuthenticationGuard = AuthenticationGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwtToken_1.JwtToken,
        hospital_emp_repoService_1.EmployeeRepoService])
], AuthenticationGuard);
//# sourceMappingURL=authentication.guard.js.map