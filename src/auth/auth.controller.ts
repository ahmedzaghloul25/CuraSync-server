import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signupDto } from './DTO/authDto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}

    @Post('signup')
    @HttpCode(201)
    signup(@Body() body : signupDto){
        return this.authService.signup(body)
    }
}
