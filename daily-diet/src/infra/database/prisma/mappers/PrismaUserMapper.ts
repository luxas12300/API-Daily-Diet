import { User } from "src/modules/users/entities/User";
import { User as UserRaw } from "@prisma/client";

export class PrismaUserMapper{
    static toPrisma({name, email, password, id}: User): UserRaw{
        return {name, email, password, id}
    }

    static toDomain({id, ...userData}:UserRaw): User{
        return new User(
            {
                ...userData,
            },id,
        );
    }
}