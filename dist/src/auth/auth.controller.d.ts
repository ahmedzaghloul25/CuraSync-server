import { AuthService } from './auth.service';
import { signupDto } from './DTO/authDto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(body: signupDto): Promise<{
        message: string;
        employee: import("mongoose").Document<unknown, {}, import("../DB/schemas/employee.schema").Employee, {}> & import("../DB/schemas/employee.schema").Employee & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
}
