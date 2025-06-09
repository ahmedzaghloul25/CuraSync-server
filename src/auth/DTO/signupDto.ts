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
import { MIN_MAX_LENGTH } from "common/constants";
import { IsPasswordMatch } from "common/decorators";
import { AdminRoles } from "common/types/roles";
export class SignupDto {
  @IsNotEmpty()
  @IsString()
  @IsAlpha()
  @MinLength(MIN_MAX_LENGTH.nameMinInput)
  @MaxLength(MIN_MAX_LENGTH.nameMaxInput)
  firstName: string;
  @IsNotEmpty()
  @IsString()
  @IsAlpha()
  @MinLength(MIN_MAX_LENGTH.nameMinInput)
  @MaxLength(MIN_MAX_LENGTH.nameMaxInput)
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  @IsPasswordMatch()
  confirmPassword: string;


  @IsNotEmpty()
  @IsMobilePhone("ar-EG")
  phone: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  DOB: Date;
}
