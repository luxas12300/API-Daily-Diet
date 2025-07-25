import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../repositories/UserRepository";
import { hash } from "bcrypt";
import { User } from "../../User";

interface CreateUserRequest{
    email: string;
    name: string;
    password: string;
}

@Injectable()
export class CreateUserUseCase{
    constructor(private userRepository: UserRepository){}

    async execute({email, name, password}: CreateUserRequest){
        const user = new User({
            email,
            name,
            password: await hash(password,10),
        })
        
        console.log("passou no execute")
        await this.userRepository.create(user);
        console.log("passou no create")

        return user;
    }
}