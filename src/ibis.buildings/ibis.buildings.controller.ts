import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IbisBuildingsService } from './ibis.buildings.service';
import { CreateIbisBuildingDto } from './dto/create-ibis.building.dto';
import { UpdateIbisBuildingDto } from './dto/update-ibis.building.dto';

@Controller('ibis.buildings')
export class IbisBuildingsController {
  constructor(private readonly ibisBuildingsService: IbisBuildingsService) {}

  @Post()
  create(@Body() createIbisBuildingDto: CreateIbisBuildingDto) {
    return this.ibisBuildingsService.create(createIbisBuildingDto);
  }

  @Get()
  findAll() {
    return this.ibisBuildingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ibisBuildingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIbisBuildingDto: UpdateIbisBuildingDto) {
    return this.ibisBuildingsService.update(+id, updateIbisBuildingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ibisBuildingsService.remove(+id);
  }
}
