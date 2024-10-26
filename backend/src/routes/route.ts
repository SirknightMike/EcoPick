import { Router, Request, Response } from 'express';

// Initialize the router
const router = Router();

// Define route handlers
router.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the main API route!');
});

router.get('/health', (req: Request, res: Response) => {
    res.status(200).send({ status: 'API is healthy' });
});

// Example routes for additional modules
import userRoutes from './user-route';

// Use modular routes
router.use('/users', userRoutes);        // All user-related routes

// Export the main router
export default router;