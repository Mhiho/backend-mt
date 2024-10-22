import { Injectable } from '@nestjs/common';
import { CreateMaptileDto } from './dto/create-maptile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Maptile } from './entities/maptile.entity';
import { Repository } from 'typeorm';
import { Building } from 'src/entities/building.entity';
// import { GenerateMap } from 'src/utils/generate.map';

@Injectable()
export class MaptileService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Maptile)
        private maptileRepository: Repository<Maptile>,
        @InjectRepository(Building)
        private buidlingRepository: Repository<Building>,
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

    async updateResources(id: number) {
        const village = await this.maptileRepository.findOne({ where: { id } });
        console.log(village);

        const ts: number = Date.now();
        const diff: number = Math.floor((ts - Number(village.startgatherresources)) / 1000);
        const food = Math.floor((diff / 3600) * village.foodrate) + village.food;
        const wood = Math.floor((diff / 3600) * village.woodrate) + village.wood;
        const stone = Math.floor((diff / 3600) * village.stonerate) + village.stone;
        const iron = Math.floor((diff / 3600) * village.ironrate) + village.iron;
        const silver = Math.floor((diff / 3600) * village.silverrate) + village.silver;
        const magic = Math.floor((diff / 3600) * village.magicrate) + village.magic;

        village.food = food;
        village.wood = wood;
        village.stone = stone;
        village.iron = iron;
        village.silver = silver;
        village.magic = magic;
        village.startgatherresources = ts + '';

        return village;
    }
    async buildSimpleBuildings(id: number, name: string) {
        const building = await this.buidlingRepository.findOne({ where: { name } });
        const village = await this.maptileRepository.findOne({ where: { id } });
        switch (building.name) {
            case 'mill':
                village.wood -= 39 * (village.mill ** 10 % +1);
                await new Promise(() =>
                    setTimeout(
                        () => {
                            village.mill++;
                        },
                        building.buildingTimeInSec * (village.mill ** 10 % +1),
                    ),
                );
                village.foodrate = 10 + (village.mill ** 10 % +1);
                break;
            case 'sawmill':
                village.wood -= 54 * (village.sawmill ** 10 % +1);
                await new Promise(() =>
                    setTimeout(
                        () => {
                            village.sawmill++;
                        },
                        building.buildingTimeInSec * (village.mill ** 10 % +1),
                    ),
                );
                village.woodrate = 10 + (village.sawmill ** 10 % +1);
                break;
            case 'stonemine':
                village.wood -= 69 * (village.sawmill ** 10 % +1);
                await new Promise(() =>
                    setTimeout(
                        () => {
                            village.stonemine++;
                        },
                        building.buildingTimeInSec * (village.stonemine ** 10 % +1),
                    ),
                );
                village.stonerate = 10 + (village.stonemine ** 10 % +1);
                break;
            default:
                break;
        }
    }
    async buildBaracks(id: number, name: string) {
        const building = await this.buidlingRepository.findOne({ where: { name } });
        const village = await this.maptileRepository.findOne({ where: { id } });
        switch (building.name) {
            case 'barracksloris':
                village.wood -= 99 * (village.barracksloris ** 10 % +1);
                await new Promise(() =>
                    setTimeout(
                        () => {
                            village.barracksloris++;
                        },
                        building.buildingTimeInSec * (village.barracksloris ** 10 % +1),
                    ),
                );
                break;
            case 'barracksibis':
                village.wood -= -119 * (village.barracksibis ** 10 % +1);
                await new Promise(() =>
                    setTimeout(
                        () => {
                            village.barracksibis++;
                        },
                        building.buildingTimeInSec * (village.barracksibis ** 10 % +1),
                    ),
                );
                break;
            case 'barrackswilds':
                village.wood -= -74 * (village.barracksibis ** 10 % +1);
                await new Promise(() =>
                    setTimeout(
                        () => {
                            village.barrackswilds++;
                        },
                        building.buildingTimeInSec * (village.barrackswilds ** 10 % +1),
                    ),
                );
                break;
            default:
                break;
        }
    }
    remove(id: number) {
        return `This action removes a #${id} maptile`;
    }
}
