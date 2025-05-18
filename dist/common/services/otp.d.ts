import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { Hashing } from "./hashing";
export declare class Otp {
    private readonly hashServices;
    constructor(hashServices: Hashing);
    create(): {
        otp: string;
        otpExpire: Date;
    };
    verify(employee: EmployeeDocument, otp: string): boolean;
}
