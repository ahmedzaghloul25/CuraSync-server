import { Type } from "class-transformer";
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  ValidateNested,
} from "class-validator";

export class AddVendorCatalogDto {
  @IsNotEmpty({ message: "Vendor name is required" })
  @IsString()
  @Length(2, 100, { message: "Name must be between 2 and 100 characters" })
  name: string;

  @IsNotEmpty({ message: "Phone number is required" })
  @IsString()
  @Matches(/^\+?[0-9\-\s()]+$/, {
    message: "Please provide a valid phone number",
  })
  phone: string;

  @IsNotEmpty({ message: "Address is required" })
  @IsString()
  @Length(3, 400, { message: "Address must be between 3 and 400 characters" })
  address: string;

  @IsOptional()
  @IsEmail({}, { message: "Please provide a valid email address" })
  email?: string;

  @IsNotEmpty({ message: "Commercial registration number is required" })
  @IsString()
  commercialRegNum: string;

  @IsNotEmpty({ message: "Tax Identification Number is required" })
  @IsString()
  TIN: string;
}

export class AddVendorCatalogArrayDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AddVendorCatalogDto)
  vendors: AddVendorCatalogDto[];
}
