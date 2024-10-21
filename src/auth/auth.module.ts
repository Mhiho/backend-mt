import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { User } from 'src/user/user.entity';
import { UsersController } from 'src/user/user.controller';
import { secretOrKey } from 'src/config/configuration';
import { UserService } from 'src/user/user.service';
import { MailService } from 'src/mail/mail.service';
import { Maptile } from 'src/maptile/entities/maptile.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Maptile]),
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: secretOrKey,
                signOptions: {
                    expiresIn: '60m',
                },
            }),
        }),
    ],
    providers: [LocalStrategy, JwtStrategy, AuthService, UserService, MailService],
    controllers: [AuthController, UsersController],
})
export class AuthModule {}
