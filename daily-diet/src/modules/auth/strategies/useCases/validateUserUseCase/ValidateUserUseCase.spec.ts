import { UserRepositoryInMemory } from "src/modules/users/entities/repositories/UserRepositoryInMemory";
import { ValidateUserUseCase } from "./ValidateUserUseCase";
import { User } from "src/modules/users/entities/User";
import { hash } from "bcrypt";
import { makeUser } from "src/modules/users/entities/factories/UserFactory";
import { UnauthorizedException } from "@nestjs/common";


let validateUserUseCase : ValidateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("Validate user", () =>{
    beforeEach(() =>{
        userRepositoryInMemory = new UserRepositoryInMemory()
        validateUserUseCase = new ValidateUserUseCase(userRepositoryInMemory)
    })

    it("Should be able to return user if credentials are correct", async () =>{
        
         const userPasswordWithoutEncription = "12345";

        const user = makeUser({
            password: await hash(userPasswordWithoutEncription,10)
        })

        userRepositoryInMemory.users = [user]

        const result = await validateUserUseCase.execute({
            email: user.email,
            password: userPasswordWithoutEncription
        });

        expect(result).toEqual(user)
    });

    it("Should be able to throw error when credentials incorrect", async() =>{
          const userPasswordWithoutEncription = "12345";

        const user = makeUser({
            password: await hash(userPasswordWithoutEncription,10)
        });

        userRepositoryInMemory.users = [user]

        expect(async () =>{
            await validateUserUseCase.execute({
                email: "incorrect@gmail.com",
                password: userPasswordWithoutEncription,
            })
        }).rejects.toThrow(UnauthorizedException)

        expect(async () =>{
            await validateUserUseCase.execute({
                email: user.email,
                password: "incorrect password",
            })
        }).rejects.toThrow(UnauthorizedException)
    })
});
