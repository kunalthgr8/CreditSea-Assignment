import express from 'express';
import loanRoutes from './routes/loan.route';
import { connectDB } from './config/database';
import cors from 'cors';

const app = express();
const PORT = 8000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'https://credit-sea-b2qi.vercel.app'],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true
}));

// Routes
app.use('/api', loanRoutes);

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

export default app;
