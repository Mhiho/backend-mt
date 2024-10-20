import { Injectable } from '@nestjs/common';
import { CreateMaptileDto } from './dto/create-maptile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Maptile } from './entities/maptile.entity';
import { Repository } from 'typeorm';
// import { GenerateMap } from 'src/utils/generate.map';

@Injectable()
export class MaptileService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Maptile)
        private maptileRepository: Repository<Maptile>,
    ) {}
    create(createMaptileDto: CreateMaptileDto) {
        return 'This action adds a new maptile';
    }

    async findAll(): Promise<Maptile[]> {
        const allMaptile = await this.maptileRepository.find();
        return allMaptile;
    }

    async findOne(id: number) {
        const village = await this.maptileRepository.findOne({ where: { id } });
        return village;
    }

    async update(id: number) {
        const village = await this.maptileRepository.findOne({ where: { id } });
        console.log(village);

        const ts: number = Date.now();
        const diff: number = Math.floor((ts - Number(village.startgatherresources)) / 1000);
        const food = Math.floor((diff / 60) * village.foodrate);
        village.food = food;
        console.log(diff);
        village.startgatherresources = ts + '';
        console.log(village.startgatherresources);
        return village.food;
    }

    remove(id: number) {
        return `This action removes a #${id} maptile`;
    }
}
