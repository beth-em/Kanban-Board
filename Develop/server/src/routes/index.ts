import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';
import { seedRouter } from './seed-routes.js'

const router = Router();

router.use('/auth', authRoutes);
// TODO: Add authentication to the API routes
// Unprotected seed route
router.use('/seed', seedRouter);

// Auth protected API route
router.use('/api', authenticateToken, apiRoutes);

export default router;
