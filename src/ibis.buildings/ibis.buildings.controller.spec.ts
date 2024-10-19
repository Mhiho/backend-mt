import { Test, TestingModule } from '@nestjs/testing';
import { IbisBuildingsController } from './ibis.buildings.controller';
import { IbisBuildingsService } from './ibis.buildings.service';

describe('IbisBuildingsController', () => {
  let controller: IbisBuildingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IbisBuildingsController],
      providers: [IbisBuildingsService],
    }).compile();

    controller = module.get<IbisBuildingsController>(IbisBuildingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
