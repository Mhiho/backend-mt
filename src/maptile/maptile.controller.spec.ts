import { Test, TestingModule } from '@nestjs/testing';
import { MaptileController } from './maptile.controller';
import { MaptileService } from './maptile.service';

describe('MaptileController', () => {
    let controller: MaptileController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MaptileController],
            providers: [MaptileService],
        }).compile();

        controller = module.get<MaptileController>(MaptileController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
