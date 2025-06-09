import { IsMongoId, IsNotEmpty } from "class-validator";

export class UpdateDepartmentDto {

    @IsMongoId()
    @IsNotEmpty()
    newHead : string

    @IsMongoId()
    @IsNotEmpty()
    departmentId: string;
}