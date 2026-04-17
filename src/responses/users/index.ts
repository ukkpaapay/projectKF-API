export class UsersResponse {
    public readonly message: string;

    constructor (message: string) {
        this.message = this._initResponse(message);
    }

    public _initResponse (message: string) {
        return message;
    }
}
