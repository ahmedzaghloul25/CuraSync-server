import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumberString } from "class-validator";


export class UpdateUnitDto{
    
      @IsNotEmpty()
      @IsNumberString()
      @Transform(({ value }) => parseInt(value, 10))
      totalBedCount: number;
}