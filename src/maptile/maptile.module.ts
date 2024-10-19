import { Module } from '@nestjs/common';
import { MaptileService } from './maptile.service';
import { MaptileController } from './maptile.controller';

@Module({
    controllers: [MaptileController],
    providers: [MaptileService],
})
export class MaptileModule {}
