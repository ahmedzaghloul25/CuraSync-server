import { IsEmail, IsEnum, IsNotEmpty } from "class-validator";
import { OtpType } from "common/types";

export class RequestNewOtpDto{
    @IsNotEmpty()
    @IsEmail()
    email : string

    @IsNotEmpty()
    @IsEnum(OtpType)
    otpFor : string
}