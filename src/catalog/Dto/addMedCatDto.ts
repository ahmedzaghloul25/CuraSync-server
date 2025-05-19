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
import { _Types } from "common";

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

  @IsEnum(_Types.TYPES.MedicationForm)
  @IsNotEmpty()
  form: string;

  @IsEnum(_Types.TYPES.MedicineUnits)
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

// DTO for updating medicine catalog that makes all fields optional
// export class UpdateMedicineCatalogDto {
//   @ApiProperty({
//     description: 'Generic name of the medicine',
//     example: 'Acetaminophen',
//     minLength: 2,
//     maxLength: 100,
//     required: false,
//   })
//   @IsString()
//   @MinLength(2)
//   @MaxLength(100)
//   @IsOptional()
//   genericName?: string;

//   @ApiProperty({
//     description: 'Brand names of the medicine',
//     example: ['Tylenol', 'Panadol'],
//     type: [String],
//     required: false,
//   })
//   @IsArray()
//   @IsString({ each: true })
//   @IsOptional()
//   brandName?: string[];

//   @ApiProperty({
//     description: 'Form of the medicine',
//     example: 'tablet',
//     enum: MedicationForm,
//     required: false,
//   })
//   @IsEnum(MedicationForm)
//   @IsOptional()
//   form?: string;

//   @ApiProperty({
//     description: 'Unit of the medicine',
//     example: 'tablet',
//     enum: MedicineUnits,
//     required: false,
//   })
//   @IsEnum(MedicineUnits)
//   @IsOptional()
//   unit?: string;

//   @ApiProperty({
//     description: 'Pharmaceutical form of the medicine',
//     example: 'Immediate release',
//     required: false,
//   })
//   @IsString()
//   @IsOptional()
//   pharmaceuticalForm?: string;

//   @ApiProperty({
//     description: 'Concentration of the medicine',
//     example: '500 mg',
//     required: false,
//   })
//   @IsString()
//   @IsOptional()
//   concentration?: string;
// }

// DTO for searching medicine catalog
// export class SearchMedicineCatalogDto {
//   @ApiProperty({
//     description: 'Search term for generic name',
//     example: 'amino',
//     required: false,
//   })
//   @IsString()
//   @IsOptional()
//   genericName?: string;

//   @ApiProperty({
//     description: 'Search term for brand name',
//     example: 'tylenol',
//     required: false,
//   })
//   @IsString()
//   @IsOptional()
//   brandName?: string;

//   @ApiProperty({
//     description: 'Form of the medicine',
//     example: 'tablet',
//     enum: MedicationForm,
//     required: false,
//   })
//   @IsEnum(MedicationForm)
//   @IsOptional()
//   form?: string;

//   @ApiProperty({
//     description: 'Unit of the medicine',
//     example: 'tablet',
//     enum: MedicineUnits,
//     required: false,
//   })
//   @IsEnum(MedicineUnits)
//   @IsOptional()
//   unit?: string;
// }

// DTO for pagination and sorting
// export class MedicineCatalogPaginationDto {
//   @ApiProperty({
//     description: 'Page number (zero-based)',
//     example: 0,
//     default: 0,
//     required: false,
//   })
//   @IsOptional()
//   page?: number = 0;

//   @ApiProperty({
//     description: 'Page size',
//     example: 10,
//     default: 10,
//     required: false,
//   })
//   @IsOptional()
//   limit?: number = 10;

//   @ApiProperty({
//     description: 'Sort field',
//     example: 'genericName',
//     required: false,
//     enum: ['genericName', 'form', 'unit'],
//   })
//   @IsOptional()
//   sortBy?: string = 'genericName';

//   @ApiProperty({
//     description: 'Sort order',
//     example: 'asc',
//     enum: ['asc', 'desc'],
//     default: 'asc',
//     required: false,
//   })
//   @IsOptional()
//   sortOrder?: 'asc' | 'desc' = 'asc';
// }
