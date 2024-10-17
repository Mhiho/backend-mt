import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/user.entity';
import { CurrentUser } from './current-user.decorator';

@Controller('auth')
export class AuthController {
    @Post('login')
    @UseGuards(AuthGuard('local'))
    async login(@Request() request) {
        return {
            userId: request.user.id,
            token: 'here the token',
        };
    }
    @Get('profile')
    @UseGuards(AuthGuard('jwt'))
    async getProfile(@CurrentUser() user: User) {
        return user;
    }
}
