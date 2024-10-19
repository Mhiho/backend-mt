import { PartialType } from '@nestjs/mapped-types';
import { CreateMaptileDto } from './create-maptile.dto';

export class UpdateMaptileDto extends PartialType(CreateMaptileDto) {}
