import { Router, Express } from 'express';
import IndexController from '../controllers/index';
import cors from 'cors';

export function setRoutes(app: Express) {
    app.use(cors());

    const router = Router();
    const indexController = new IndexController();

    router.get('/', indexController.getIndex);
    router.post('/item', indexController.postItem);

    app.use('/api', router);
}