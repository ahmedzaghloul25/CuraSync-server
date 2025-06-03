import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { TYPES } from "common/types";
import { MIN_MAX_LENGTH } from "common/constants";


export class LoginDto{
    @IsNotEmpty()
    @IsEmail()
    email : string

    @IsNotEmpty()
    @IsString()
    @MinLength(MIN_MAX_LENGTH.passMinLength)
    password : string
}