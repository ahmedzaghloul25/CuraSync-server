import EmployeeRepoService from 'src/DB/repository/employee.repo.service';
import { signupDto } from './DTO/authDto';
export declare class AuthService {
    private readonly employeeRepoService;
    constructor(employeeRepoService: EmployeeRepoService);
    signup(body: signupDto): Promise<{
        message: string;
        employee: import("mongoose").Document<unknown, {}, import("../DB/schemas/employee.schema").Employee, {}> & import("../DB/schemas/employee.schema").Employee & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
}
