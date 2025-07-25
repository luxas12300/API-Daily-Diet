import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AuthController } from "./Auth.controller";
import { LocalStrategy } from "src/modules/auth/strategies/local.strategy";
import { ValidateUserUseCase } from "src/modules/auth/strategies/useCases/validateUserUseCase/ValidateUserUseCase";
import { UserModule } from "../user/UserModule";
import { DatabasModule } from "src/infra/database/prisma/database.module";
import { SignInDTOValidateMiddleware } from "./middleware/SignInDTOValidate.middleware";


@Module({
    controllers: [AuthController],
    imports: [DatabasModule,UserModule],
    providers: [LocalStrategy, ValidateUserUseCase]
})

export class AuthModule{
    configure(consumer: MiddlewareConsumer){
        consumer.apply(SignInDTOValidateMiddleware).forRoutes('/signIn')
    }
}