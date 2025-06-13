import { Type } from "class-transformer";
import {
  IsString,
  IsEnum,
  IsArray,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { MedicationForm, MedicineUnits } from "common/types";

export class AddMedicineCatalogDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  genericName: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  brandName?: string[];

  @IsEnum(MedicationForm)
  @IsNotEmpty()
  form: string;

  @IsEnum(MedicineUnits)
  @IsNotEmpty()
  unit: string;

  @IsString()
  @IsOptional()
  pharmaceuticalForm?: string;

  @IsString()
  @IsNotEmpty()
  concentration: string;
}

export class AddMedicineCatalogArrayDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AddMedicineCatalogDto)
  medicines: AddMedicineCatalogDto[];
}

