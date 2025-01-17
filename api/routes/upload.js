import express from 'express';
import upload from '../utils/multerConfig.js';

import { createSubmission } from '../controller/upload.js';
const router = express.Router();

router.post('/', upload.array('images', 10), createSubmission);
export default router;