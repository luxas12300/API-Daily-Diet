import { UserRepository } from "src/modules/users/entities/repositories/UserRepository";
import { User } from "src/modules/users/entities/User";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUserRepostory implements UserRepository{

    constructor(private prisma: PrismaService){}

    async create(user: User): Promise<void> {

        await this.prisma.user.create({
            data: user
        })
    }

}