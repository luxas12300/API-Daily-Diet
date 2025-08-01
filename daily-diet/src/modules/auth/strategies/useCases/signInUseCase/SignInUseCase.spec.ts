import { JwtService } from "@nestjs/jwt";
import { SignInsUseCase } from "./SignInUseCase";
import { makeUser } from "src/modules/users/entities/factories/UserFactory";
import { UserPayload } from "src/infra/http/modules/auth/models/User.payload";

let signInUseCase: SignInsUseCase;
let jwtService: JwtService;

describe("Sign in", ()=>{
    beforeEach(() =>{
        jwtService = new JwtService({secret: 'secret'});
        signInUseCase = new SignInsUseCase(jwtService);
    });

    it('Should be able to create valid acces_token', async () =>{
        const user = makeUser({});

        const token = await signInUseCase.execute({
            user,
        })

        const payload = jwtService.decode(token) as UserPayload;

        expect(payload.sub).toEqual(user.id);
    })

})