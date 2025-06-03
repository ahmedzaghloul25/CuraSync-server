import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import {
  SignupDto,
  ConfirmEmailDto,
  RequestNewOtpDto,
  ForgotPasswordDto,
  LoginDto,
  ResetPasswordDto,
} from "./DTO";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";
import { Hashing, Otp } from "common/services";
import { TYPES } from "common/types";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { SendMailOptions } from "nodemailer";
import { fakeDelay } from "common/utils/fakeDelay";
import { JwtToken } from "common/services/jwtToken";
import { Request, Response } from "express";

@Injectable()
export class AuthService {
  constructor(
    private readonly employeeRepoService: EmployeeRepoService,
    private readonly hashing: Hashing,
    private readonly otp: Otp,
    private readonly event: EventEmitter2,
    private readonly jwtToken: JwtToken,
    private readonly logger: Logger
  ) {}
  //============================== signup =================================
  async signup(body: SignupDto) {
    try {
      body.password = this.hashing.createHash(body.password);
      const employee = (await this.employeeRepoService.create({
        ...body,
      })) as EmployeeDocument;
      const { otp, otpExpire } = this.otp.create();
      await this.employeeRepoService.updateOne(
        { _id: employee._id },
        {
          otp: this.hashing.createHash(otp),
          otpExpireAt: otpExpire,
          otpFor: TYPES.OtpType.CONFIRM_MAIL,
        }
      );
      const options: SendMailOptions = {
        to: employee.email,
        subject: "Verify your email",
        html: `<p>Please use OTP <b>${otp}</b> to verify your email within 15 minutes</p>`,
      };
      this.event.emit("sendOtp", options);
      return { message: "success", employee };
    } catch (error) {
      if (error.errorResponse.code === 11000) {
        throw new UnauthorizedException("Email already registered");
      }
      throw new InternalServerErrorException(error.message);
    }
  }
  //============================= confirmEmail =============================
  async confirmEmail(body: ConfirmEmailDto) {
    const employee = await this.employeeRepoService.findOne({
      email: body.email,
      otpFor: TYPES.OtpType.CONFIRM_MAIL,
    });
    if (!employee || employee.isEmailConfirmed) {
      await fakeDelay(200);
      throw new BadRequestException("Invalid Credentials");
    }
    const otpVerify = await this.otp.verify(employee, body.otp);
    if (!otpVerify) {
      await fakeDelay(200);
      throw new BadRequestException("Invalid Credentials");
    }
    await this.employeeRepoService.updateOne(
      { _id: employee._id },
      {
        isEmailConfirmed: true,
        $unset: { otp: "", otpExpireAt: "", otpFor: "" },
      }
    );
    return { message: "success" };
  }
  //============================= requestNewOtp ============================
  async requestNewOtp(body: RequestNewOtpDto) {
    const employee = await this.employeeRepoService.findOne({
      email: body.email,
      isDeleted: { $exists: false },
      otpFor: body.otpFor, //make sure that requested otp is of the same type of expired one.
      otpExpireAt: { $lt: new Date() }, // make sure OTP expired.
    });
    if (!employee) {
      await fakeDelay(200);
      return { message: "Check your Inbox in case of valid Email" };
    }
    if (
      employee.isEmailConfirmed &&
      body.otpFor === TYPES.OtpType.CONFIRM_MAIL
    ) {
      await fakeDelay(170);
      return { message: "Check your Inbox in case of valid Email" };
    }
    const { otp, otpExpire } = this.otp.create();
    await this.employeeRepoService.updateOne(
      { _id: employee._id },
      {
        otp: this.hashing.createHash(otp),
        otpExpireAt: otpExpire,
        otpFor: body.otpFor,
      }
    );
    const options: SendMailOptions = {
      to: employee.email,
      subject: `${body.otpFor}`,
      html: `<p>Please use OTP <b>${otp}</b> to ${body.otpFor} within 15 minutes</p>`,
    };
    this.event.emit("sendOtp", options);
    return { message: "Check your Inbox in case of valid Email" };
  }
  //================================= login ================================
  async login(body: LoginDto, res: Response) {
    const employee = await this.employeeRepoService.findOne({
      email: body.email,
      isEmailConfirmed: true,
      isDeleted: { $exists: false },
    });
    if (
      !employee ||
      !this.hashing.verifyHash(body.password, employee.password)
    ) {
      throw new NotFoundException(
        "Email/password not valid or email not confirmed"
      );
    }
    const token = await this.jwtToken.createToken({
      _id: employee._id,
      occupation: employee.occupation,
    });
    res.cookie("auth-token", token, {
      maxAge: 30 * 60 * 1000, // 30 min
      httpOnly: true,
      sameSite: process.env.MODE === "DEV" ? "lax" : "strict",
      secure: process.env.MODE === "DEV" ? false : true,
    });
    return { message: "success" };
  }
  //============================= forgotPassword ===========================
  async forgotPassword({ email }: ForgotPasswordDto) {
    const employee = await this.employeeRepoService.findOne({
      email,
      isEmailConfirmed: true,
      isDeleted: { $exists: false },
    });
    if (!employee || employee.otpExpireAt > new Date()) {
      this.logger.warn(
        `[AuthService] failed attempt to forgotPassword, input: ${email}`,
        "AuthService"
      );
      await fakeDelay(200);
      return { message: "OTP sent to your email" };
    }
    const { otp, otpExpire } = this.otp.create();
    await this.employeeRepoService.updateOne(
      { _id: employee._id },
      {
        otp: this.hashing.createHash(otp),
        otpExpireAt: otpExpire,
        otpFor: TYPES.OtpType.PASS_RESET,
      }
    );
    const options: SendMailOptions = {
      to: employee.email,
      subject: TYPES.OtpType.PASS_RESET,
      html: `<p>Please use OTP <b>${otp}</b> to ${TYPES.OtpType.PASS_RESET} within 15 minutes</p>`,
    };
    this.event.emit("sendOtp", options);
    return { message: "OTP sent to your email" };
  }
  //============================= resetPassword ============================
  async resetPassword({ email, otp, newPassword }: ResetPasswordDto) {
    const employee = await this.employeeRepoService.findOne({
      email,
      isEmailConfirmed: true,
      otpFor: TYPES.OtpType.PASS_RESET,
      otpExpireAt: { $gt: new Date() }, // valid otp
    });
    if (!employee || !(await this.otp.verify(employee, otp))) {
      throw new BadRequestException("Invalid credentials");
    }
    if (this.hashing.compareHash(newPassword, employee.password)) {
      throw new BadRequestException("Password can't be the same as old one");
    }
    await this.employeeRepoService.updateOne(
      { _id: employee._id },
      {
        password: this.hashing.createHash(newPassword),
        passwordChangedAt: new Date(),
        $unset: { otp: "", otpFor: "", otpExpireAt: "" },
      }
    );
    this.logger.warn(
      `[AuthService] password reset for employee: ${employee._id}`,
      "AuthService"
    );
    return { message: "success" };
  }
}
