import { IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export enum Race {
    LORIS = 'loris',
    IBIS = 'ibis',
    WILDS = 'wilds',
    NEUTRAL = 'neutral',
}
export class CreateUserDto {
    @IsNotEmpty()
    @MaxLength(20)
    @IsString()
    username: string;

    @IsNotEmpty()
    @MaxLength(20)
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsEnum(Race)
    race: Race;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    password: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    retypedPassword: string;
}
