import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { SignupDto, ConfirmEmailDto, RequestNewOtpDto } from "./DTO";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";
import { Hashing, Otp } from "common/services";
import { _Types } from "common";
import {
  Employee,
  EmployeeDocument,
} from "src/DB/schemas/hospital/hospital.employee.schema";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { SendMailOptions } from "nodemailer";
import { UpdateQuery } from "mongoose";
import { fakeDelay } from "common/utils/fakeDelay";

@Injectable()
export class AuthService {
  constructor(
    private readonly employeeRepoService: EmployeeRepoService,
    private readonly hashing: Hashing,
    private readonly otp: Otp,
    private readonly event: EventEmitter2
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
          otpFor: _Types.TYPES.OtpType.CONFIRM_MAIL,
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
    });
    if (!employee || employee.isEmailConfirmed) {
      throw new UnauthorizedException("Email or OTP not valid");
    }
    const otpVerify = await this.otp.verify(employee, body.otp);
    if (!otpVerify || employee.otpFor !== _Types.TYPES.OtpType.CONFIRM_MAIL) {
      throw new NotAcceptableException("Invalid OTP.");
    }
    await this.employeeRepoService.updateOne(
      { _id: employee._id },
      {
        isEmailConfirmed: true,
        $unset: { otp: "", otpExpireAt: "", otpFor: "" },
      }
    );
    return { message: "Email confirmed successfully" };
  }
  //============================= requestNewOtp ============================
  async requestNewOtp(body: RequestNewOtpDto) {
    const employee = await this.employeeRepoService.findOne({
      email: body.email,
    });
    if (!employee) {
      await fakeDelay(200);
      return { message: "Check your Inbox in case of valid Email" };
    }
    if (employee.otpExpireAt > new Date()) {
      throw new UnauthorizedException("OTP is not expired yet");
    }
    if (
      employee.isEmailConfirmed &&
      body.otpFor === _Types.TYPES.OtpType.CONFIRM_MAIL
    ) {
      throw new ConflictException("Email already confirmed");
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
  //============================= forgotPassword ===========================
  //============================= resetPassword ============================
  //================================ update ================================
}
