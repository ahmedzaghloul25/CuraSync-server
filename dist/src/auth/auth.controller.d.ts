import { AuthService } from "./auth.service";
import { SignupDto, ConfirmEmailDto, RequestNewOtpDto } from "./DTO";
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
    }>;
    requestNewOtp(body: RequestNewOtpDto): Promise<{
        message: string;
    }>;
}
