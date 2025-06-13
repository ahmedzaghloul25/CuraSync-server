import { Transform } from "class-transformer";
import {
  IsAlpha,
  IsMongoId,
  IsNotEmpty,
  IsNumberString,
  IsString,
} from "class-validator";
import { _slugify } from "common/utils";
import { Types } from "mongoose";

export class AddNewUnitDto {
  @IsNotEmpty()
  @IsMongoId()
  unitCatalogId: Types.ObjectId;

  @IsNotEmpty()
  @IsNumberString()
  @Transform(({ value }) => parseInt(value, 10))
  totalBedCount: number;
}
