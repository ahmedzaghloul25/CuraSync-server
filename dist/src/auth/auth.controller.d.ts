import { AuthService } from "./auth.service";
import { SignupDto, ConfirmEmailDto, RequestNewOtpDto, ResetPasswordDto } from "./DTO";
import { LoginDto } from "./DTO/loginDto";
import { Response } from "express";
import { ForgotPasswordDto } from "./DTO/forgotPasswordDto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(body: SignupDto): Promise<{
        message: string;
        employee: import("mongoose").Document<unknown, {}, import("../DB/schemas/hospital/hospital.employee.schema").Employee, {}> & import("../DB/schemas/hospital/hospital.employee.schema").Employee & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    confirmEmail(Body: ConfirmEmailDto): Promise<{
        message: string;
        employee: import("mongoose").Types.ObjectId;
    }>;
    requestNewOtp(body: RequestNewOtpDto): Promise<{
        message: string;
    }>;
    login(body: LoginDto, res: Response): Promise<{
        message: string;
    }>;
    forgotPAssword(body: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(body: ResetPasswordDto): Promise<{
        message: string;
    }>;
}
