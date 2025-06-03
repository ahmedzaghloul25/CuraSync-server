import { Transform, Type } from "class-transformer";
import {
  IsDate,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  MaxLength,
  MinDate,
  MinLength,
  validate,
} from "class-validator";
import { MIN_MAX_LENGTH } from "common/constants";
import { IsNotEmptyBody } from "common/decorators";

export class UpdateDocumentsDto {

  @IsNotEmptyBody()
  private readonly __validation? : any

  @IsOptional()
  @MinLength(MIN_MAX_LENGTH.descMinInput)
  @MaxLength(MIN_MAX_LENGTH.descMaxInput)
  address: string;

  @IsOptional()
  @Transform(({ value }) => new Date(value))
  @Type(() => Date)
  @IsDate()
  @MinDate(new Date())
  medicalLicenseExpiry: Date;

  @IsOptional()
  @Transform(({ value }) => new Date(value))
  @Type(() => Date)
  @IsDate()
  @MinDate(new Date())
  commercialRegExpiry: Date;

}
