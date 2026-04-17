import { Request, Response } from 'express';
import { UsersResponse } from "../../responses/users";

class UserController {
    get(req: Request, res: Response): void {
        res.send(new UsersResponse('This is get user'));
    }

    post(req: Request, res: Response): void {
        res.send(new UsersResponse('This is post user'));
    }

    put(req: Request, res: Response): void {
        res.send(new UsersResponse('This is put user'));
    }

    delete(req: Request, res: Response): void {
        res.send(new UsersResponse('This is delete user'));
    }
}

export default UserController;
