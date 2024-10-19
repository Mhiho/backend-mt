import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create.user.dto';
import { AuthService } from 'src/auth/auth.service';
import { MailService } from 'src/mail/mail.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        private readonly authService: AuthService,
        private mailService: MailService,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async createUser(createUserDto: CreateUserDto) {
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
        const token = this.authService.getTokenForUser(user);
        const mailToken = await bcrypt.hash(Date.now() + '', 10);
        await this.userRepository.save(user);
        await this.mailService.sendUserConfirmation(user, mailToken);

        return {
            token,
        };
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }
}
