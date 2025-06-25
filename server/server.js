import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";
import showRouter from './routes/showRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';
import adminRouter from './routes/adminRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();
const port = 3000;

// Connect to MongoDB
await connectDB();

// Core middlewares
app.use(express.json());
app.use(cors());

// Public route
app.get('/', (req, res) => res.send('Server is Live!'));

// Inngest Webhook route
app.use('/api/inngest', serve({ client: inngest, functions }));

//Public show-related API
app.use('/api/show', showRouter)
app.use('/api/booking', bookingRouter)
app.use('/api/admin', adminRouter)
app.use('/api/user', userRouter)



// Example Protected Route using Clerk
app.get('/api/protected', clerkMiddleware(), requireAuth(), (req, res) => {
  res.send(`Hello ${req.auth.userId}, you are authenticated!`);
});


//  Start Server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
