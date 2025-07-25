import { User } from "../User"

type Override = Partial<User>;

export const makeUser = ({id, ...override} : Override) =>{
    return new User(
        {
            email: "email@email",
            name: "luxas",
            password: "12345",
            ...override,
        },
        id,
    );
}