import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    @Post('create')
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.userService.createUser(createUserDto);
    }
    @Get()
    async findAll() {
        return await this.userService.findAll();
    }
}
