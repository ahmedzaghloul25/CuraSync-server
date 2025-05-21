import { SignupDto, ConfirmEmailDto, RequestNewOtpDto } from "./DTO";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";
import { Hashing, Otp } from "common/services";
import { Employee } from "src/DB/schemas/hospital/hospital.employee.schema";
import { EventEmitter2 } from "@nestjs/event-emitter";
export declare class AuthService {
    private readonly employeeRepoService;
    private readonly hashing;
    private readonly otp;
    private readonly event;
    constructor(employeeRepoService: EmployeeRepoService, hashing: Hashing, otp: Otp, event: EventEmitter2);
    signup(body: SignupDto): Promise<{
        message: string;
        employee: import("mongoose").Document<unknown, {}, Employee, {}> & Employee & {
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
}
