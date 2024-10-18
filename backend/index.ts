// index.ts
import express, { Request, Response } from 'express';

const app = express();
const port: number = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// A basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Sample API endpoint
app.get('/api/users', (req: Request, res: Response) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ];
  res.json(users);
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
