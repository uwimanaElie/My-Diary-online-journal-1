import express from 'express';
import UserController from '../controllers/userController';
import userValidator from '../middleware/userValidator';


const userController = new UserController();

const router = express.Router();

router.post('/signup', userValidator, userController.signUp);
router.post('/signin', userController.signIn);

export default router;