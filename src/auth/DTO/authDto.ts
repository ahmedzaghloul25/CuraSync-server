import {
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
import { _Types, ERROR_MESSAGES, MIN_MAX_LENGTH } from "common";
import { IsPasswordMatch } from "common/decorators/IsPasswordPatch.decorator";

export class signupDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(MIN_MAX_LENGTH.nameMinInput)
  @MaxLength(MIN_MAX_LENGTH.nameMaxInput)
  firstName: string;
  @IsNotEmpty()
  @IsString()
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
  @IsEnum(_Types.JobCategoryTypes)
  jobCategory: string;

  @IsNotEmpty()
  @IsEnum(_Types.AllOccupations)
  occupation: string;
  
  @IsNotEmpty()
  @IsMobilePhone("ar-EG")
  phone: string;

  @IsNotEmpty()
  @IsDate()
  DOB: Date;
}
