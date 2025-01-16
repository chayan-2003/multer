import express from 'express';
import { createSubmission } from '../controller/submission.js';
import upload from '../utils/multerConfig.js'; // Multer configuration

const router = express.Router();


router.post('/create', upload.array('images', 10), createSubmission);

export default router;
