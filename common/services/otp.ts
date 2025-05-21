import { customAlphabet } from "nanoid";
import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { EmployeeDocument } from "src/DB/schemas/hospital/hospital.employee.schema";
import { Hashing } from "./hashing";
import { CONSTANTS } from "common";
import { EmployeeRepoService } from "src/DB/repository/hospital/hospital.emp.repoService";

@Injectable()
export class Otp {
  constructor(
    @Inject(forwardRef(() => EmployeeRepoService))
    private employeeRepoService: EmployeeRepoService,
    private hashing: Hashing
  ) {}
  create(): { otp: string; otpExpire: Date } {
    const createOtp = customAlphabet(
      "0123456789",
      CONSTANTS.MIN_MAX_LENGTH.otpLength
    );
    const otp = createOtp();
    const otpExpire = new Date(Date.now() + 15 * 60 * 1000); // 15 min
    return { otp, otpExpire };
  }

  async verify(employee: EmployeeDocument, otp: string): Promise<boolean> {
    if (employee.otpExpireAt < new Date()) {
      await this.employeeRepoService.updateOne(
        { _id: employee._id },
        {
          $unset: { otp: "", otpExpireAt: "", otpFor: "" },
        }
      );
      throw new UnauthorizedException("OTP expired.");
    }
    const result = this.hashing.verifyHash(otp, employee.otp);
    return result;
  }
}
