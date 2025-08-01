import { Controller, HttpCode, HttpStatus, Post, UseGuards, Request, Get } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { request } from "http";
import { SignInsUseCase } from "src/modules/auth/strategies/useCases/signInUseCase/SignInUseCase";
import { LocalAuthGuard } from "./guards/localAuthGuard";
import { JwtAuthGuard } from "./guards/JwtAuthGuard";
import { AuthenticatedRequestModel } from "./models/AuthenticateRequestModel";


@Controller()
export class AuthController{

    constructor(private signInUseCase: SignInsUseCase){}

    @Post('/singIn')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    async signIn(@Request() request: any){
        const acces_token = await this.signInUseCase.execute({
            user: request.user,
        })

        return {acces_token}
    }

    @Get('test')
    @UseGuards(JwtAuthGuard)
    async test(@Request() request: AuthenticatedRequestModel){
        return request.user
    }
}