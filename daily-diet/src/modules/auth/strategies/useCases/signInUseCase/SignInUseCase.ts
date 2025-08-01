import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserPayload } from "src/infra/http/modules/auth/models/User.payload";
import { User } from "src/modules/users/entities/User";

interface SignInRequest{
    user: User;
}

@Injectable()
export class SignInsUseCase{

    constructor(private jwtService: JwtService){}

    async execute({user}: SignInRequest){
        const payload: UserPayload = {
            sub: user.id,
            email: user.email,
            name: user.name,
            
        }

        const jwtToken = this.jwtService.sign(payload)
        return jwtToken;
    }
}