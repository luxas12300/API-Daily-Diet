import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";


export class SignInBody{

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;
}