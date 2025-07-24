import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserUseCase } from "src/modules/users/entities/useCases/createUserUseCase/CreateUserUseCase";
import { CreateUserBody } from "./dtos/CreateUserBody";

@Controller('/users')
export class UserController{
    constructor(private createUserUseCase: CreateUserUseCase){}

    @Post()
    async createPost(@Body() body: CreateUserBody){
        
        const {email, name, password} = body

        console.log("Criando usuário: ", JSON.stringify(body))
        
        const user = this.createUserUseCase.execute({
            email,name,password
        })
        console.log("Usuário criado com sucesso!")
        return user;
    }
}