import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtToken } from "common/services/jwtToken";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";
export declare class AuthenticationGuard implements CanActivate {
    private jwtToken;
    private employeeRepoService;
    constructor(jwtToken: JwtToken, employeeRepoService: EmployeeRepoService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
