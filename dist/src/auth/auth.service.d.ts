import { Logger } from "@nestjs/common";
import { SignupDto, ConfirmEmailDto, RequestNewOtpDto, ForgotPasswordDto, LoginDto, ResetPasswordDto } from "./DTO";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";
import { Hashing, Otp } from "common/services";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { JwtToken } from "common/services/jwtToken";
import { Response } from "express";
export declare class AuthService {
    private readonly employeeRepoService;
    private readonly hashing;
    private readonly otp;
    private readonly event;
    private readonly jwtToken;
    private readonly logger;
    constructor(employeeRepoService: EmployeeRepoService, hashing: Hashing, otp: Otp, event: EventEmitter2, jwtToken: JwtToken, logger: Logger);
    signup(body: SignupDto): Promise<{
        message: string;
        employee: import("mongoose").Document<unknown, {}, import("src/DB/schemas/hospital/hospital.employee.schema").Employee, {}> & import("src/DB/schemas/hospital/hospital.employee.schema").Employee & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    confirmEmail(body: ConfirmEmailDto): Promise<{
        message: string;
    }>;
    requestNewOtp(body: RequestNewOtpDto): Promise<{
        message: string;
    }>;
    login(body: LoginDto, res: Response): Promise<{
        message: string;
    }>;
    forgotPassword({ email }: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword({ email, otp, newPassword }: ResetPasswordDto): Promise<{
        message: string;
    }>;
}
