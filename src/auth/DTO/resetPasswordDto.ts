import {
  IsEmail,
  IsNotEmpty,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from "class-validator";
import { MIN_MAX_LENGTH} from "common/constants";

export class ResetPasswordDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(MIN_MAX_LENGTH.otpLength)
  @MaxLength(MIN_MAX_LENGTH.otpLength)
  otp : string

  @IsNotEmpty()
  @IsStrongPassword()
  @MinLength(MIN_MAX_LENGTH.passMinLength)
  newPassword: string;
}
