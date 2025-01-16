import express from 'express';
import mongoose from 'mongoose';
import connectDB from './utils/connectDb.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import submissionRoute from './routes/submission.js';
import dashboardRoute from './routes/dashboard.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
connectDB();

const allowedOrigins = [
    process.env.VITE_CLIENT_URL_PROD,
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
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Authorization'
    ],
    Credentials: true,
    maxAge: 86400 
};

// Apply CORS Middleware
app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());

app.options('*', cors(corsOptions));
app.use('/uploads', express.static('uploads'));

app.use('/api/submission', submissionRoute);
app.use('/api', dashboardRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});  