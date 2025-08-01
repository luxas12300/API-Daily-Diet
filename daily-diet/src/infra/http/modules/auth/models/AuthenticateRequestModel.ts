

export class AuthenticatedRequestModel extends Request{
    user: {
        id: string,
        name: string,
        email: string,
    }
}