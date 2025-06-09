import { IsMongoId, IsNotEmpty, IsString } from "class-validator";


export class AddDepartmentDto {
    
    @IsMongoId()
    @IsNotEmpty()
    head: string

    @IsMongoId()
    @IsNotEmpty()
    catalogId: string
}