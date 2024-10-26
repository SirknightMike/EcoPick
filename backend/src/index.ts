// Import required modules
import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import mysql from 'mysql2/promise';

// Load environment variables
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());                // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors());                        // Enable CORS for cross-origin requests
app.use(helmet());                      // Add basic security headers

// Connect to Database
const connectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        console.log('MySQL Database connected successfully');
        return connection;
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit if database connection fails
    }
};
connectDB();

// Define Routes
import mainRoutes from './routes/route'; // Import main route file

app.use('/api', mainRoutes);           // Use main routes under `/api` path

// Basic Health Check Route
app.get('/', (req: Request, res: Response) => {
    res.status(200).send('API is running');
});

// Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('An error occurred:', err.message);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
