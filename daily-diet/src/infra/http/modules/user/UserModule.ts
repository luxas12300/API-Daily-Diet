import { Module } from "@nestjs/common";
import { UserController } from "./UserController";
import { CreateUserUseCase } from "src/modules/users/entities/useCases/createUserUseCase/CreateUserUseCase";
import { DatabasModule } from "src/infra/database/prisma/database.module";


@Module({
    imports: [DatabasModule],
    controllers: [UserController],
    providers: [CreateUserUseCase]
})

export class UserModule {}