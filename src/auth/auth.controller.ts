import { Body, Controller, HttpCode, Post, Put, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import {
  SignupDto,
  ConfirmEmailDto,
  RequestNewOtpDto,
  ResetPasswordDto,
} from "./DTO";
import { minutes, Throttle } from "@nestjs/throttler";
import { LoginDto } from "./DTO/loginDto";
import { Response } from "express";
import { ForgotPasswordDto } from "./DTO/forgotPasswordDto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Auth")
@Controller({ version: "1", path: "auth" })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  @HttpCode(201)
  @ApiOperation({ summary: "system admin registration" })
  @ApiResponse({
    status: 201,
    description: "system admin registered successfully",
  })
  signup(@Body() body: SignupDto) {
    return this.authService.systemAdminSignup(body);
  }

  @Post("confirm-email")
  @Throttle({ default: { ttl: minutes(15), limit: 5 } })
  @ApiOperation({ summary: "Confirm employee email with OTP" })
  @ApiResponse({ status: 200, description: "Email confirmed successfully" })
  @ApiResponse({ status: 400, description: "Invalid OTP or already confirmed" })
  confirmEmail(@Body() Body: ConfirmEmailDto) {
    return this.authService.confirmEmail(Body);
  }

  @Put("otp-new")
  @Throttle({ default: { ttl: minutes(1), limit: 1 } })
  @ApiOperation({
    summary:
      "Request new OTP for email confirmation or password reset",
  })
  @ApiResponse({ status: 200, description: "OTP sent if email exists" })
  requestNewOtp(@Body() body: RequestNewOtpDto) {
    return this.authService.requestNewOtp(body);
  }

  @Post("login")
  @ApiOperation({ summary: "Employee authentication" })
  @ApiResponse({ status: 200, description: "Login successful" })
  @ApiResponse({ status: 404, description: "Invalid credentials or unconfirmed email" })
  login(@Body() body: LoginDto, @Res({ passthrough: true }) res: Response) {
    return this.authService.login(body, res);
  }

  @Put("password-forgot")
  @Throttle({ default: { ttl: minutes(1), limit: 1 } })
  @ApiOperation({ summary: "Initiate password reset process" })
  @ApiResponse({ status: 200, description: "Reset OTP sent if email exists" })
  forgotPAssword(@Body() body: ForgotPasswordDto) {
    return this.authService.forgotPassword(body);
  }
  
  @Post("password-reset")
  @Throttle({ default: { ttl: minutes(15), limit: 5 } })
  @ApiOperation({ summary: "Reset password using OTP" })
  @ApiResponse({ status: 200, description: "Password reset successful" })
  @ApiResponse({ status: 400, description: "Invalid OTP or password" })
  resetPassword(@Body() body: ResetPasswordDto) {
    return this.authService.resetPassword(body);
  }
}
