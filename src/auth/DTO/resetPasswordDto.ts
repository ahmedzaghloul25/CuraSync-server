import {
  IsEmail,
  IsNotEmpty,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from "class-validator";
import { CONSTANTS } from "common";

export class ResetPasswordDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(CONSTANTS.MIN_MAX_LENGTH.otpLength)
  @MaxLength(CONSTANTS.MIN_MAX_LENGTH.otpLength)
  otp : string

  @IsNotEmpty()
  @IsStrongPassword()
  @MinLength(CONSTANTS.MIN_MAX_LENGTH.passMinLength)
  newPassword: string;
}
