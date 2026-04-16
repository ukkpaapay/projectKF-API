import { Request, Response } from 'express';

class IndexController {
    getIndex(req: Request, res: Response): void {
        res.send({
            message: 'Welcome to Project-KF-API!'
        });
    }

    postItem(req: Request, res: Response): void {
        const item = req.body;
        // Logic to handle the posted item
        res.status(201).send({ message: 'Item created', item });
    }
}

export default IndexController;
