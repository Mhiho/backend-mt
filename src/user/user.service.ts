import { BadRequestException, Injectable } from '@nestjs/common';
import { FindOperator, Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create.user.dto';
import { AuthService } from 'src/auth/auth.service';
import { MailService } from 'src/mail/mail.service';
import * as bcrypt from 'bcrypt';
import { Maptile } from 'src/maptile/entities/maptile.entity';

@Injectable()
export class UserService {
    constructor(
        private readonly authService: AuthService,
        private mailService: MailService,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Maptile)
        private maptileRepository: Repository<Maptile>,
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

        const allMapSlotsAvaible = await this.maptileRepository.find({
            where: { avaiblestartslot: true },
        });
        const villageIndex = Math.floor(Math.random() * allMapSlotsAvaible.length);
        console.log(villageIndex);
        const firstVillage = await this.maptileRepository.findOne({ where: { id: villageIndex } });
        console.log(firstVillage);
        firstVillage.owned = createUserDto.username;
        firstVillage.race = createUserDto.race;

        user.ownvillages = [firstVillage.id];
        user.gamestart = String(Date.now());

        // const token = this.authService.getTokenForUser(user);
        // const mailToken = await bcrypt.hash(Date.now() + '', 10);
        console.log(user);
        await this.userRepository.save(user);
        // await this.mailService.sendUserConfirmation(user, mailToken);
        return {
            message: 'user created',
        };
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
    async findOneByName(email: string): Promise<string> {
        const user = await this.userRepository.findOne({ where: { email } });
        console.log(user);
        return 'jest';
    }
}
