import { User } from "../User";

export abstract class UserRepository{
    abstract create(user: User):Promise<void>;
}