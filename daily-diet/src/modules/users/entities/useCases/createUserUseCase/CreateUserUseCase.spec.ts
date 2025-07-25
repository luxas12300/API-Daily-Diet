import { compare } from "bcrypt"
import { UserRepository } from "../../repositories/UserRepository"
import { UserRepositoryInMemory } from "../../repositories/UserRepositoryInMemory"
import { CreateUserUseCase } from "./CreateUserUseCase"


let createUserUseCase : CreateUserUseCase
let userRepositoryInMemory: UserRepositoryInMemory

describe('Create User', () => {
    beforeEach(() =>{
        userRepositoryInMemory = new UserRepositoryInMemory()
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory)
    })

    it('Should be able to create user', async () =>{
        expect(userRepositoryInMemory.users).toEqual([]);

        const user = await createUserUseCase.execute({
            email: 'email@email.com',
            name: 'Lucas',
            password: '12345',
        });

        expect(userRepositoryInMemory.users).toEqual([user])
    })

    it('Should be able to create user whith password encrypted', async () =>{
        const userPasswordWithoutEncription = "12345";

        const user = await createUserUseCase.execute({
            email: 'email@email.com',
            name: 'Lucas',
            password: userPasswordWithoutEncription,
        });
    

        const userHasPasswordEncrypted = await compare(userPasswordWithoutEncription, user.password)

        expect(userHasPasswordEncrypted).toBeTruthy()
    })
})