import { Type } from "class-transformer";
import {
  IsAlpha,
  IsDate,
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
  IsNotIn,
  IsPhoneNumber,
  Max,
  MaxLength,
  MinLength,
} from "class-validator";
import { MIN_MAX_LENGTH } from "common/constants";
import { AdminRoles, All_Roles } from "common/types/roles";

export class AddSingleEmployeeDto {
  @IsNotEmpty()
  @IsAlpha()
  @MinLength(MIN_MAX_LENGTH.nameMinInput)
  @MaxLength(MIN_MAX_LENGTH.nameMaxInput)
  firstName: string;

  @IsAlpha()
  @MinLength(MIN_MAX_LENGTH.nameMinInput)
  @MaxLength(MIN_MAX_LENGTH.nameMaxInput)
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsEnum(All_Roles)
  role: string;

  @IsNotEmpty()
  @IsMobilePhone("ar-EG")
  phone: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  DOB: Date;
}
