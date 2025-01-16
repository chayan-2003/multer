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
    'https://multerapp.netlify.app/' ,
    process.env.VITE_CLIENT_URL_DEV
];

const corsOptions = { 
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error(`Origin not allowed by CORS: ${origin}`));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Authorization'
    ],
    exposedHeaders: ['Authorization'],
    maxAge: 86400 // 24 hours
};

// Apply CORS Middleware
app.use(cors(corsOptions));


app.use(cookieParser());
app.use(express.json());


app.use('/uploads', express.static('uploads'));


app.use('/api/submission', submissionRoute);
app.use('/api', dashboardRoute);

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});