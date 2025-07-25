import { UnauthorizedException } from "@nestjs/common";
import { compare } from "bcrypt";
import { UserRepository } from "src/modules/users/entities/repositories/UserRepository";

interface ValidateUserRequest{
    email: string,
    password: string
}

export class ValidateUserUseCase{
    constructor(private userRepository: UserRepository){}

    async execute({email, password} : ValidateUserRequest){
        const user = await this.userRepository.findByEmail(email)

        if(!user) throw new UnauthorizedException("Email ou senha incorretos.")
    
        const isPasswordMatched = await compare(password, user.password)

        if(!isPasswordMatched) 
            throw new UnauthorizedException("Email ou senha incorretos.");

        return user
    }
}