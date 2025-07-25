import { Controller, HttpCode, HttpStatus, Post, UseGuards, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { request } from "http";


@Controller()
export class AuthController{
    @Post('/singIn')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard('local'))
    async signIn(@Request() request: any){
        return request.user;
    }
}