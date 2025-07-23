import { randomUUID } from "crypto";

interface UserSchema{
    name: string;
    email: string;
    password: string;
}

export class User{
    private props: UserSchema;
    private _id: string;

    constructor(props: UserSchema, id?: string){
        this.props = props;
        this._id = id || randomUUID();
    }

   getId(): string{
    return this._id;
   } 
   getEmail(): string{
    return this.props.email;
   }

   setEmail(email: string){
    this.props.email = email;
   }

   getName() : string{
    return this.props.name;
   }

   setName(name: string) {
    this.props.name = name;
   }

   getPassword(): string{
    return this.props.password;
   }

   setPassword(password: string){
    this.props.password = password;
   }
}