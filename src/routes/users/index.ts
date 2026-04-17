import { Router } from "express";
import controller from "../../controllers";

const router = Router();
router.get('/get', controller.usersController.get);
router.get('/post', controller.usersController.post);
router.get('/put', controller.usersController.put);
router.get('/delete', controller.usersController.delete);

export default router;
