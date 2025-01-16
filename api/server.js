import express from 'express';
import mongoose from 'mongoose';
import connectDB from './utils/connectDb.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import submissionRoute from './routes/submission.js';
import  dashboardRoute from './routes/dashboard.js';

const app = express();

connectDB();

// Middleware setup
app.use(cors({
    origin: "http://localhost:5173", // Frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Allow cookies and authentication
    maxAge: 86400, // 24 hours
    exposedHeaders: ['Content-Range', 'X-Content-Range']
}));

app.use(cookieParser());
app.use(express.json());

// Set up static file serving for images
app.use('/uploads', express.static('uploads'));

// Route for handling submission
app.use('/api/submission', submissionRoute);
app.use('/api', dashboardRoute);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});