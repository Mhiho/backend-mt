import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaptileService } from './maptile.service';
import { CreateMaptileDto } from './dto/create-maptile.dto';
import { UpdateMaptileDto } from './dto/update-maptile.dto';

@Controller('maptile')
export class MaptileController {
    constructor(private readonly maptileService: MaptileService) {}

    @Post()
    create(@Body() createMaptileDto: CreateMaptileDto) {
        return this.maptileService.create(createMaptileDto);
    }

    @Get()
    findAll() {
        return this.maptileService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.maptileService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMaptileDto: UpdateMaptileDto) {
        return this.maptileService.update(+id, updateMaptileDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.maptileService.remove(+id);
    }
}