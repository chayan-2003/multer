import express from 'express';
import mongoose from 'mongoose';
import connectDB from './utils/connectDb.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import upload from './routes/upload.js';
import dashboard from './routes/dashboard.js';

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
    credentials: true,
    maxAge: 86400 
};


app.use(cors(corsOptions));


app.use(cookieParser());
app.use(express.json());

app.options('*', cors(corsOptions));


app.use('/api/dashboard', dashboard);
app.use('/api/upload', upload);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});