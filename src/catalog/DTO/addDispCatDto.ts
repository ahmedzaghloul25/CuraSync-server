import { Type } from "class-transformer";
import {
  IsArray,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from "class-validator";
import { MIN_MAX_LENGTH } from "common/constants";

export class AddDisposableCatalogDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(MIN_MAX_LENGTH.nameMinInput)
  @MaxLength(MIN_MAX_LENGTH.nameMaxInput)
  name: string;
}

export class AddDisposableCatalogArrayDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AddDisposableCatalogDto)
  disposables: AddDisposableCatalogDto[];
}
