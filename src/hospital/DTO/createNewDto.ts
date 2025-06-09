import { Transform, Type } from "class-transformer";
import {
  Allow,
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinDate,
  MinLength,
} from "class-validator";
import { MIN_MAX_LENGTH } from "common/constants";

export class CreateNewHospitalDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(MIN_MAX_LENGTH.nameMinInput)
  @MaxLength(MIN_MAX_LENGTH.nameMaxInput)
  name: string;

  @IsNotEmpty()
  @MinLength(MIN_MAX_LENGTH.descMinInput)
  @MaxLength(MIN_MAX_LENGTH.descMaxInput)
  address: string;

  @IsNotEmpty()
  @IsString()
  medicalLicenseNumber: string;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @Type(() => Date)
  @IsDate()
  @MinDate(new Date())
  medicalLicenseExpiry: Date;

  @IsNotEmpty()
  @IsString()
  commercialRegNumber: string;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @Type(() => Date)
  @IsDate()
  @MinDate(new Date())
  commercialRegExpiry: Date;

  @IsNotEmpty()
  @IsString()
  TIN_Number: string;

  @Allow()
  medicalLicense: any;
  @Allow()
  commercialReg: any;
  @Allow()
  TIN: any;
  @Allow()
  logo: any;
}
