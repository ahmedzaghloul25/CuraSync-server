import { Module, Logger } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { employeeModule } from "src/DB/schemas/hospital/hospital.employee.schema";
import { Hashing, Otp, SendEmail } from "common/services";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";
import { JwtToken } from "common/services/jwtToken";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [employeeModule, EventEmitterModule.forRoot()],
  controllers: [AuthController],
  providers: [
    EmployeeRepoService,
    Hashing,
    Otp,
    AuthService,
    SendEmail,
    JwtToken,
    JwtService,
    Logger
  ],
})
export class AuthModule {}
