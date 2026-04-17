import { Router, Express } from 'express';
import cors from 'cors';
import UsersRouter from './users';

export function setRoutes(app: Express) {
    app.use(cors());

    const router = Router();
    router.use('/user', UsersRouter);

    app.use('/api', router);
}
