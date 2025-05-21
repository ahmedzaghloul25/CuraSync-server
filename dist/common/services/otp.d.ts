import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { Hashing } from "./hashing";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";
export declare class Otp {
    private employeeRepoService;
    private hashing;
    constructor(employeeRepoService: EmployeeRepoService, hashing: Hashing);
    create(): {
        otp: string;
        otpExpire: Date;
    };
    verify(employee: EmployeeDocument, otp: string): Promise<boolean>;
}
