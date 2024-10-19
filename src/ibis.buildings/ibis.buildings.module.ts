import { Module } from '@nestjs/common';
import { IbisBuildingsService } from './ibis.buildings.service';
import { IbisBuildingsController } from './ibis.buildings.controller';

@Module({
  controllers: [IbisBuildingsController],
  providers: [IbisBuildingsService],
})
export class IbisBuildingsModule {}
