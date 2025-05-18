import { Type } from "class-transformer";
import {
  IsAlpha,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from "class-validator";
import { CONSTANTS } from "common";

export class AddUnitCatDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  @MinLength(CONSTANTS.MIN_MAX_LENGTH.descMinInput)
  @MaxLength(CONSTANTS.MIN_MAX_LENGTH.descMaxInput)
  description: string;
}

export class AddUnitCatArrayDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AddUnitCatDto)
  units: AddUnitCatDto[];
}
