import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';
import { Maptile } from 'src/maptile/entities/maptile.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Maptile])],
    controllers: [UsersController],
    providers: [UserService, AuthService, JwtService, MailService],
})
export class UserModule {}
