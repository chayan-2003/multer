import express from 'express';
import mongoose from 'mongoose';
import connectDB from './utils/connectDb.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import submissionRoute from './routes/submission.js';
import  dashboardRoute from './routes/dashboard.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
connectDB();

const allowedOrigins = [
    process.env.VITE_CLIENT_URL_DEV, 
    process.env.VITE_CLIENT_URL_PROD 
];


app.use(cors({
    origin: allowedOrigins, 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, 
    maxAge: 86400, 
    exposedHeaders: ['Content-Range', 'X-Content-Range']
}));

app.use(cookieParser());
app.use(express.json());


app.use('/uploads', express.static('uploads'));


app.use('/api/submission', submissionRoute);
app.use('/api', dashboardRoute);

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});