import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  MaxLength,
  MinLength,
} from "class-validator";
import { MIN_MAX_LENGTH } from "common/constants";

export class ConfirmEmailDto {
  @IsNotEmpty()
  @IsNumberString()
  @MaxLength(MIN_MAX_LENGTH.otpLength)
  @MinLength(MIN_MAX_LENGTH.otpLength)
  otp: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
