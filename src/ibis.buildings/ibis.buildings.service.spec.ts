import { Test, TestingModule } from '@nestjs/testing';
import { IbisBuildingsService } from './ibis.buildings.service';

describe('IbisBuildingsService', () => {
  let service: IbisBuildingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IbisBuildingsService],
    }).compile();

    service = module.get<IbisBuildingsService>(IbisBuildingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
