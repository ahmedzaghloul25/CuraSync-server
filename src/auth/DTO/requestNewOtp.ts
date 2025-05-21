import { IsEmail, IsEnum, IsNotEmpty } from "class-validator";
import { _Types } from "common";

export class RequestNewOtpDto{
    @IsNotEmpty()
    @IsEmail()
    email : string

    @IsNotEmpty()
    @IsEnum(_Types.TYPES.OtpType)
    otpFor : string
}