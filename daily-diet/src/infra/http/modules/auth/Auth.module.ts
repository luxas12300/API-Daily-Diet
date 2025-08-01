import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AuthController } from "./Auth.controller";
import { LocalStrategy } from "src/modules/auth/strategies/local.strategy";
import { ValidateUserUseCase } from "src/modules/auth/strategies/useCases/validateUserUseCase/ValidateUserUseCase";
import { UserModule } from "../user/UserModule";
import { DatabasModule } from "src/infra/database/prisma/database.module";
import { SignInDTOValidateMiddleware } from "./middleware/SignInDTOValidate.middleware";
import { SignInsUseCase } from "src/modules/auth/strategies/useCases/signInUseCase/SignInUseCase";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "src/modules/auth/strategies/jwt.strategy";


@Module({
    imports: [DatabasModule,UserModule, JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: {expiresIn: process.env.JWT_EXPIRE}
    })],
    controllers: [AuthController],
    providers: [LocalStrategy, JwtStrategy, ValidateUserUseCase, SignInsUseCase],
})

export class AuthModule{
    configure(consumer: MiddlewareConsumer){
        consumer.apply(SignInDTOValidateMiddleware).forRoutes('/signIn')
    }
}