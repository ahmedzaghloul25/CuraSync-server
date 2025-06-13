import { Type } from "class-transformer";
import {
  IsString,
  IsEnum,
  IsOptional,
  IsBoolean,
  IsNotEmpty,
  IsArray,
  ValidateNested,
} from "class-validator";
import { ImagingBodyRegions, ImagingTypes } from "common/types";

export class AddImagingCatalogDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsEnum(ImagingTypes)
  @IsNotEmpty()
  modality: string;

  @IsEnum(ImagingBodyRegions)
  @IsNotEmpty()
  bodyRegion: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  contraindications?: string;

  @IsString()
  @IsOptional()
  patientPreparation?: string;

  @IsString()
  @IsOptional()
  radiationDose?: string;

  @IsBoolean()
  @IsOptional()
  usesContrast?: boolean = false;

  @IsString()
  @IsOptional()
  contrastDetails?: string;

  @IsBoolean()
  @IsOptional()
  requiresConsent?: boolean = false;
}

export class AddImagingCatalogArrayDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AddImagingCatalogDto)
  imagings: AddImagingCatalogDto[];
}
