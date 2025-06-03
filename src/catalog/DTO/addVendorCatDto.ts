import { Type } from "class-transformer";
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
  MinLength,
  ValidateNested,
} from "class-validator";
import { MIN_MAX_LENGTH } from "common/constants";

export class AddVendorCatalogDto {
  @IsNotEmpty()
  @IsString()
  @Length(MIN_MAX_LENGTH.nameMinInput, MIN_MAX_LENGTH.nameMaxInput)
  name: string;

  @IsNotEmpty()
  @IsPhoneNumber('EG')
  phone: string;

  @IsNotEmpty()
  @IsString()
  @Length(MIN_MAX_LENGTH.descMinInput, MIN_MAX_LENGTH.descMaxInput)
  address: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  commercialRegNum: string;

  @IsNotEmpty()
  @IsString()
  TIN: string;
}

export class AddVendorCatalogArrayDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AddVendorCatalogDto)
  vendors: AddVendorCatalogDto[];
}
