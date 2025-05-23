import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { EmployeeModule } from "src/DB/schemas/hospital/hospital.employee.schema";
import { Hashing, Otp, SendEmail } from "common/services";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";
import { JwtToken } from "common/services/jwtToken";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [EmployeeModule, EventEmitterModule.forRoot()],
  controllers: [AuthController],
  providers: [
    EmployeeRepoService,
    Hashing,
    Otp,
    AuthService,
    SendEmail,
    JwtToken,
    JwtService,
  ],
})
export class AuthModule {}
