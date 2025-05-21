import { Body, Controller, HttpCode, Post, Put } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignupDto, ConfirmEmailDto, RequestNewOtpDto } from "./DTO";
import { minutes, Throttle } from "@nestjs/throttler";

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
  @Throttle({ default: { ttl: minutes(1), limit: 3 } })
  requestNewOtp(@Body() body: RequestNewOtpDto) {
    return this.authService.requestNewOtp(body);
  }
}
