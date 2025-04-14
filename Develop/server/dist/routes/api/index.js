import { Router } from 'express';
import { ticketRouter } from './ticket-routes.js';
import { userRouter } from './user-routes.js';
import { seedRouter } from '../seed-routes.js';
// Added new router instance and seedRouter import
const router = Router();
router.use('/seed', seedRouter);
router.use('/tickets', ticketRouter);
router.use('/users', userRouter);
export default router;
