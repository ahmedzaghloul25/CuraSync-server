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
import { _Types } from "common";

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

  @IsEnum(_Types.TYPES.LAbTestCategory)
  @IsNotEmpty()
  category: _Types.TYPES.LAbTestCategory;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  description?: string;

  @IsEnum(_Types.TYPES.SpecimenType)
  @IsNotEmpty()
  specimenType: _Types.TYPES.SpecimenType;

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

// export class UpdateLabCatalogDto extends CreateLabCatalogDto {
//   // All fields are optional in update DTO
//   @IsOptional()
//   name?: string;

//   @IsOptional()
//   code?: string;

//   @IsOptional()
//   category?: LAbTestCategory;

//   @IsOptional()
//   specimenType?: SpecimenType;
// }

// export class LabCatalogResponseDto extends CreateLabCatalogDto {
//   @ApiProperty({
//     description: 'Unique identifier of the lab catalog item',
//     example: '60d9f2d6f682a22e85d9c8e9'
//   })
//   @IsString()
//   id: string;

//   @ApiProperty({
//     description: 'Date and time when the record was created',
//     example: '2023-05-19T14:30:00.000Z'
//   })
//   createdAt: Date;

//   @ApiProperty({
//     description: 'Date and time when the record was last updated',
//     example: '2023-05-19T15:45:00.000Z'
//   })
//   updatedAt: Date;
// }

// export class LabCatalogPaginationResponseDto {
//   @ApiProperty({
//     description: 'List of lab catalog items',
//     type: [LabCatalogResponseDto]
//   })
//   data: LabCatalogResponseDto[];

//   @ApiProperty({
//     description: 'Total number of items',
//     example: 150
//   })
//   total: number;

//   @ApiProperty({
//     description: 'Number of items per page',
//     example: 10
//   })
//   limit: number;

//   @ApiProperty({
//     description: 'Current page number',
//     example: 1
//   })
//   page: number;
// }

// export class LabCatalogQueryParamsDto {
//   @ApiPropertyOptional({
//     description: 'Search by name',
//     example: 'blood'
//   })
//   @IsString()
//   @IsOptional()
//   search?: string;

//   @ApiPropertyOptional({
//     description: 'Filter by category',
//     enum: LAbTestCategory,
//     example: LAbTestCategory.HEMATOLOGY
//   })
//   @IsEnum(LAbTestCategory)
//   @IsOptional()
//   category?: LAbTestCategory;

//   @ApiPropertyOptional({
//     description: 'Filter by specimen type',
//     enum: SpecimenType,
//     example: SpecimenType.BLOOD
//   })
//   @IsEnum(SpecimenType)
//   @IsOptional()
//   specimenType?: SpecimenType;

//   @ApiPropertyOptional({
//     description: 'Number of items per page',
//     example: 10
//   })
//   @IsOptional()
//   limit?: number;

//   @ApiPropertyOptional({
//     description: 'Page number',
//     example: 1
//   })
//   @IsOptional()
//   page?: number;

//   @ApiPropertyOptional({
//     description: 'Sort by field',
//     example: 'name'
//   })
//   @IsOptional()
//   @IsString()
//   sort?: string;

//   @ApiPropertyOptional({
//     description: 'Sort direction (asc or desc)',
//     example: 'asc'
//   })
//   @IsOptional()
//   @IsString()
//   order?: 'asc' | 'desc';
// }
