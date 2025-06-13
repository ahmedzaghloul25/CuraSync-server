import {
  CanActivate,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtToken } from "common/services/jwtToken";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private jwtToken: JwtToken,
    private employeeRepoService: EmployeeRepoService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.cookies["auth-token"];
    if (!token) {
      throw new UnauthorizedException("token not found");
    }
    try {
      const payload = await this.jwtToken.verifyToken(token);
      const employee = await this.employeeRepoService.findOne({
        _id: payload._id,
        isFreezed: { $exists: false },
      });
      if(!employee){
        throw new NotFoundException('Employee not found')
      }
      if (
        employee?.passwordChangedAt &&
        new Date(payload.iat! * 1000) < employee?.passwordChangedAt
      ) {
        throw new UnauthorizedException("Token invalid due to password change");
      }
      request["employee"] = employee;
      return true;
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      } else {
        console.log("authentication error. ", error.message);
        throw new InternalServerErrorException("Authentication service error");
      }
    }
  }
}
