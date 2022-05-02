import { IsEmail, IsNotEmpty, IsSemVer, IsString, Min, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    username: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;
}