import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  MaxLength,
  MinLength,
} from "class-validator";
import { CONSTANTS } from "common";

export class ConfirmEmailDto {
  @IsNotEmpty()
  @IsNumberString()
  @MaxLength(CONSTANTS.MIN_MAX_LENGTH.otpLength)
  @MinLength(CONSTANTS.MIN_MAX_LENGTH.otpLength)
  otp: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
