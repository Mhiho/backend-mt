import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy } from 'passport-local';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    private readonly logger = new Logger(LocalStrategy.name);

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {
        super();
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async validate(username: string, password: string): Promise<any> {
        const user = await this.userRepository.findOne({ where: { username } });
        if (!user) {
            this.logger.debug(`User ${username} not found`);
            throw new UnauthorizedException();
        }
        if (password !== user.password) {
            this.logger.debug(`Invalid credentials for ${username}`);
            throw new UnauthorizedException();
        }
    }
}
