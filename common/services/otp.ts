import { customAlphabet } from "nanoid";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { Hashing } from "./hashing";

@Injectable()
export class Otp {
  constructor(private readonly hashServices: Hashing) {}

  create() {
    const createOtp = customAlphabet("0123456789", 6);
    const otp = createOtp();
    const otpExpire = new Date(Date.now() + 15 * 60 * 1000); // 15 min
    return { otp, otpExpire };
  }

  verify(employee: EmployeeDocument, otp: string) {
    if (employee.otpExpireAt < new Date()) {
      throw new UnauthorizedException("OTP expired.");
    }
    const result = this.hashServices.verifyHash(otp, employee.otp);
    return result;
  }
}
