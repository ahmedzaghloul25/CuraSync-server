import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { _Types, CONSTANTS } from "common";


export class LoginDto{
    @IsNotEmpty()
    @IsEmail()
    email : string

    @IsNotEmpty()
    @IsString()
    @MinLength(CONSTANTS.MIN_MAX_LENGTH.passMinLength)
    password : string
}