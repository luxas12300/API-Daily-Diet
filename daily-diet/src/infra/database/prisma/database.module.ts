import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { UserRepository } from "src/modules/users/entities/repositories/UserRepository";
import { PrismaUserRepostory } from "./repositories/PrismaUserRepository";



@Module({
    providers:[PrismaService,
        {
            provide: UserRepository,
            useClass: PrismaUserRepostory,
        }, 
    ],
    exports: [UserRepository]
    
})

export class DatabasModule{}