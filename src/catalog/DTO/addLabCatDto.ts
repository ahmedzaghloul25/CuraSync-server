import { Type } from "class-transformer";
import {
  IsString,
  IsEnum,
  IsOptional,
  IsArray,
  IsBoolean,
  MaxLength,
  MinLength,
  IsNotEmpty,
  ValidateNested,
} from "class-validator";
import { TYPES } from "common/types";

export class AddLabCatalogDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  code: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  loincCode?: string;

  @IsEnum(TYPES.LAbTestCategory)
  @IsNotEmpty()
  category: TYPES.LAbTestCategory;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  description?: string;

  @IsEnum(TYPES.SpecimenType)
  @IsNotEmpty()
  specimenType: TYPES.SpecimenType;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  specimenRequirements?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  processingTime?: string;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  referenceValues?: string;

  @IsBoolean()
  @IsOptional()
  requiresConsent?: boolean;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  requiredFasting?: string[];
}

export class AddLabCatalogArrayDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AddLabCatalogDto)
  laboratories: AddLabCatalogDto[];
}

