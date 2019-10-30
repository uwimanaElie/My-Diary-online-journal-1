import express from 'express';
import userRoute from '../routes/userRoute';
import entryRoute from '../routes/entryRoute';

const router = express.Router();

router.use('/auth', userRoute);
router.use('/', entryRoute);

export default router;


