import multer from 'multer';
import path from 'path';

// Set up storage configuration for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Files will be saved in the 'uploads/' directory
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));  // Ensure unique filenames
    }
});

// File filter to allow only image files
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true); // Accept image files
    } else {
        cb(new Error('Only image files are allowed!'), false); // Reject non-image files
    }
};

// Multer configuration to handle the upload of up to 10 images
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

export default upload;
