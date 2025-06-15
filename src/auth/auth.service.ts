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
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { SendMailOptions } from "nodemailer";
import { fakeDelay } from "common/utils/fakeDelay";
import { JwtToken } from "common/services/jwtToken";
import { Response } from "express";
import { AdminRoles } from "common/types/roles";
import { OtpType } from "common/types";

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
  //====================== systemAdminSignup ===========================
  /**
   * Register a new system administrator
   * @param body - Registration data containing email, password, and other required fields
   * @throws {UnauthorizedException} If email is already registered
   * @throws {InternalServerErrorException} If registration fails
   * @returns Object containing success message and created employee data
   */
  async systemAdminSignup(body: SignupDto) {
    try {
      const employee = (await this.employeeRepoService.create({
        ...body,
        occupation: AdminRoles.HOSPITAL_ADMINISTRATOR,
      })) as EmployeeDocument;
      const { otp, otpExpire } = this.otp.create();
      await this.employeeRepoService.updateOne(
        { _id: employee._id },
        {
          otp: this.hashing.createHash(otp),
          otpExpireAt: otpExpire,
          otpFor: OtpType.CONFIRM_MAIL,
        }
      );
      const options: SendMailOptions = {
        to: employee.email,
        subject: "Verify your email",
        html: `<p>Please use OTP <b>${otp}</b> to verify your email within 15 minutes</p>`,
      };
      this.event.emit("sendEmail", options);
      return { message: "success", employee };
    } catch (error) {
      if (error.errorResponse.code === 11000) {
        throw new UnauthorizedException("Email already registered");
      }
      throw new InternalServerErrorException(error.message);
    }
  }
  //============================= confirmEmail =============================
  /**
   * Confirm employee email using OTP
   * @param body - Contains email and OTP for verification
   * @throws {BadRequestException} If OTP is invalid or email already confirmed
   * @returns Object containing success message
   */
  async confirmEmail(body: ConfirmEmailDto) {
    const employee = await this.employeeRepoService.findOne({
      email: body.email,
      otpFor: OtpType.CONFIRM_MAIL,
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
    return { message: "success", employee: employee._id };
  }
  //============================= requestNewOtp ============================
  /**
   * Request a new OTP for email confirmation or password reset
   * @param body - Contains email and OTP type (confirm email or reset password)
   * @returns Generic success message for security (doesn't confirm if email exists)
   */
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
      body.otpFor === OtpType.CONFIRM_MAIL
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
    this.event.emit("sendEmail", options);
    return { message: "Check your Inbox in case of valid Email" };
  }
  //================================= login ================================
  /**
   * Authenticate employee and create session
   * @param body - Login credentials (email and password)
   * @param res - Express response object for setting cookie
   * @throws {NotFoundException} If credentials invalid or email not confirmed
   * @returns Object containing success message
   */
  async login(body: LoginDto, res: Response) {
    const employee = await this.employeeRepoService.findOne({
      email: body.email,
      isEmailConfirmed: true,
      isFreezed: { $exists: false },
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
      maxAge: 120 * 60 * 1000, //  2 hrs
      httpOnly: true,
      sameSite: process.env.MODE === "DEV" ? "lax" : "strict",
      secure: process.env.MODE === "DEV" ? false : true,
    });
    return { message: "success" };
  }
  //============================= forgotPassword ===========================
  /**
   * Initiate password reset process
   * @param param0 - Object containing email address
   * @returns Generic success message for security (doesn't confirm if email exists)
   */
  async forgotPassword({ email }: ForgotPasswordDto) {
    const employee = await this.employeeRepoService.findOne({
      email,
      isEmailConfirmed: true,
      isFreezed: { $exists: false },
    });
    if (!employee || employee.otpExpireAt > new Date()) {
      this.logger.warn(
        `[Auth Service] failed attempt to forgotPassword, input: ${email}`,
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
        otpFor: OtpType.PASS_RESET,
      }
    );
    const options: SendMailOptions = {
      to: employee.email,
      subject: OtpType.PASS_RESET,
      html: `<p>Please use OTP <b>${otp}</b> to ${OtpType.PASS_RESET} within 15 minutes</p>`,
    };
    this.event.emit("sendEmail", options);
    return { message: "OTP sent to your email" };
  }
  //============================= resetPassword ============================
  /**
   * Reset password using OTP
   * @param param0 - Object containing email, OTP, and new password
   * @throws {BadRequestException} If OTP invalid or new password same as old
   * @returns Object containing success message
   */
  async resetPassword({ email, otp, newPassword }: ResetPasswordDto) {
    const employee = await this.employeeRepoService.findOne({
      email,
      isEmailConfirmed: true,
      otpFor: OtpType.PASS_RESET,
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
      `[Auth Service] password reset for employee: ${employee._id}`,
      "AuthService"
    );
    return { message: "success" };
  }
  //============================= updatePassword ============================
  //================================= logout ================================
}
