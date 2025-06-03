import { IsEmail, IsEnum, IsNotEmpty } from "class-validator";
import { TYPES } from "common/types";

export class RequestNewOtpDto{
    @IsNotEmpty()
    @IsEmail()
    email : string

    @IsNotEmpty()
    @IsEnum(TYPES.OtpType)
    otpFor : string
}