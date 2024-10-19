import { Test, TestingModule } from '@nestjs/testing';
import { MaptileService } from './maptile.service';

describe('MaptileService', () => {
  let service: MaptileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaptileService],
    }).compile();

    service = module.get<MaptileService>(MaptileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
