import { UserRepository } from "src/modules/users/entities/repositories/UserRepository";
import { User } from "src/modules/users/entities/User";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";
import { PrismaUserMapper } from "../mappers/PrismaUserMapper";

@Injectable()
export class PrismaUserRepostory implements UserRepository{

    constructor(private prisma: PrismaService){}

    async create(user: User): Promise<void> {

        const userRaw = PrismaUserMapper.toPrisma(user)

        await this.prisma.user.create({
            data: userRaw
        })
    }

    async findByEmail(email: string): Promise<User | null> {
       const user = await this.prisma.user.findUnique({
        where:{
            email
        }
        })
        if (!user){
        return null
        }
        return PrismaUserMapper.toDomain(user)
    }

}