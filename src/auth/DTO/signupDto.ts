import { Transform, Type } from "class-transformer";
import {
  IsAlpha,
  IsDate,
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from "class-validator";
import { _Types, DECORATORS, CONSTANTS } from "common";

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  @IsAlpha()
  @MinLength(CONSTANTS.MIN_MAX_LENGTH.nameMinInput)
  @MaxLength(CONSTANTS.MIN_MAX_LENGTH.nameMaxInput)
  firstName: string;
  @IsNotEmpty()
  @IsString()
  @IsAlpha()
  @MinLength(CONSTANTS.MIN_MAX_LENGTH.nameMinInput)
  @MaxLength(CONSTANTS.MIN_MAX_LENGTH.nameMaxInput)
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  @DECORATORS.IsPasswordMatch()
  confirmPassword: string;

  @IsNotEmpty()
  @IsEnum(_Types.AllRoles)
  occupation: string;

  @IsNotEmpty()
  @IsMobilePhone("ar-EG")
  phone: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  DOB: Date;
}
