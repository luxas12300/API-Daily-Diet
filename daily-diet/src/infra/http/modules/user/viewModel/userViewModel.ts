import { User } from "src/modules/users/entities/User";


export class UserViewModel{
    static toHttp(user: User){
        return {
            user
        }
    }
}