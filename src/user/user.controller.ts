import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(
        private readonly authService: AuthService,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    @Post('create')
    async create(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto);
        const user = new User();

        if (createUserDto.password !== createUserDto.retypedPassword) {
            throw new BadRequestException(['Passwords are not identical']);
        }

        const existingUser = await this.userRepository.findOne({
            where: [{ username: createUserDto.username }, { email: createUserDto.email }],
        });

        if (existingUser) {
            throw new BadRequestException(['username or email is already taken']);
        }

        user.username = createUserDto.username;
        user.email = createUserDto.email;
        user.password = await this.authService.hashPassword(createUserDto.password);
        user.race = createUserDto.race;

        return {
            ...(await this.userRepository.save(user)),
            token: this.authService.getTokenForUser(user),
        };
    }
}
