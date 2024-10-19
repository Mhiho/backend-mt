import { Injectable } from '@nestjs/common';
import { CreateIbisBuildingDto } from './dto/create-ibis.building.dto';
import { UpdateIbisBuildingDto } from './dto/update-ibis.building.dto';

@Injectable()
export class IbisBuildingsService {
  create(createIbisBuildingDto: CreateIbisBuildingDto) {
    return 'This action adds a new ibisBuilding';
  }

  findAll() {
    return `This action returns all ibisBuildings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ibisBuilding`;
  }

  update(id: number, updateIbisBuildingDto: UpdateIbisBuildingDto) {
    return `This action updates a #${id} ibisBuilding`;
  }

  remove(id: number) {
    return `This action removes a #${id} ibisBuilding`;
  }
}
