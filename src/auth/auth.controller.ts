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

@Controller({ version: "1", path: "auth" })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //====================== signup =========================
  @Post("signup")
  @HttpCode(201)
  signup(@Body() body: SignupDto) {
    return this.authService.signup(body);
  }
  //===================== confirmEmail ====================
  @Post("confirm-email")
  @Throttle({ default: { ttl: minutes(15), limit: 5 } })
  confirmEmail(@Body() Body: ConfirmEmailDto) {
    return this.authService.confirmEmail(Body);
  }
  //=================== requestNewOtp =====================
  @Put("otp-new")
  @Throttle({ default: { ttl: minutes(1), limit: 1 } })
  requestNewOtp(@Body() body: RequestNewOtpDto) {
    return this.authService.requestNewOtp(body);
  }
  //====================== login ==========================
  @Post("login")
  login(@Body() body: LoginDto, @Res({ passthrough: true }) res: Response) {
    return this.authService.login(body, res);
  }
  //================= forgotPassword ======================
  @Put("password-forgot")
  @Throttle({ default: { ttl: minutes(1), limit: 1 } })
  forgotPAssword(@Body() body: ForgotPasswordDto) {
    return this.authService.forgotPassword(body);
  }
  //================ resetPassword ========================
  @Post("password-reset")
  @Throttle({ default: { ttl: minutes(15), limit: 5 } })
  resetPassword(@Body() body: ResetPasswordDto) {
    return this.authService.resetPassword(body);
  }
}
