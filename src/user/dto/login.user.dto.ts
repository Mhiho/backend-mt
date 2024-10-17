import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UserDto {
    @IsNotEmpty()
    @MaxLength(20)
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(16)
    password: string;
}
