import { Injectable } from '@nestjs/common';
import { CreateMaptileDto } from './dto/create-maptile.dto';
import { UpdateMaptileDto } from './dto/update-maptile.dto';
// import { GenerateMap } from 'src/utils/generate.map';

@Injectable()
export class MaptileService {
    create(createMaptileDto: CreateMaptileDto) {
        return 'This action adds a new maptile';
    }

    findAll() {
        return `This action returns all maptile`;
    }

    findOne(id: number) {
        return `This action returns a #${id} maptile`;
    }

    update(id: number, updateMaptileDto: UpdateMaptileDto) {
        return `This action updates a #${id} maptile`;
    }

    remove(id: number) {
        return `This action removes a #${id} maptile`;
    }
}
