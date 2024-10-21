import { Module } from '@nestjs/common';
import { MaptileService } from './maptile.service';
import { MaptileController } from './maptile.controller';
import { User } from 'src/user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maptile } from './entities/maptile.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Maptile, User])],
    controllers: [MaptileController],
    providers: [MaptileService],
})
export class MaptileModule {}
