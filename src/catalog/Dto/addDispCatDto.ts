import { Type } from "class-transformer";
import {
  IsArray,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from "class-validator";
import { CONSTANTS } from "common";

export class AddDisposableCatalogDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(CONSTANTS.MIN_MAX_LENGTH.nameMinInput)
  @MaxLength(CONSTANTS.MIN_MAX_LENGTH.nameMaxInput)
  name: string;
}

export class AddDisposableCatalogArrayDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AddDisposableCatalogDto)
  disposables: AddDisposableCatalogDto[];
}
