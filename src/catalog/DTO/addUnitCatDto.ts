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
import { MIN_MAX_LENGTH } from "common/constants";

export class AddUnitCatDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  @MinLength(MIN_MAX_LENGTH.descMinInput)
  @MaxLength(MIN_MAX_LENGTH.descMaxInput)
  description: string;
}

export class AddUnitCatArrayDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AddUnitCatDto)
  units: AddUnitCatDto[];
}
