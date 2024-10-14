import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';

export enum Race {
    LORIS = 'loris',
    IBIS = 'ibis',
    WILDS = 'wilds',
}

export class UserDto {
    @IsNotEmpty()
    @MinLength(20)
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEnum(Race)
    race: Race;
}
