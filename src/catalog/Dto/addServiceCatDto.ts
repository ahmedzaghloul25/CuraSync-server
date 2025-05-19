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

export class AddServiceCatDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  @MinLength(CONSTANTS.MIN_MAX_LENGTH.descMinInput)
  @MaxLength(CONSTANTS.MIN_MAX_LENGTH.descMaxInput)
  description: string;
}

export class AddServiceCatArrayDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AddServiceCatDto)
  services: AddServiceCatDto[];
}
