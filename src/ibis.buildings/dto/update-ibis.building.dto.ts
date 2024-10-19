import { PartialType } from '@nestjs/mapped-types';
import { CreateIbisBuildingDto } from './create-ibis.building.dto';

export class UpdateIbisBuildingDto extends PartialType(CreateIbisBuildingDto) {}
