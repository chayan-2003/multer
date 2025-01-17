import User from '../models/User.js';

export const createSubmission = async (req, res) => {
    try {
        const { username, social_media_handle } = req.body;

       
        if (!username || !social_media_handle) {
            return res.status(400).json({ message: 'Username and social media handle are required.' });
        }

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'No files uploaded.' });
        }

        
        const imageUrls = req.files.map(file => file.path); 
        console.log('Image URLs:', imageUrls);
        const newSubmission = new User({
            username: username,
            social_media_handle: social_media_handle,
            imageUrls: imageUrls
        });

       
        await newSubmission.save();

        res.status(200).json({ 
            message: 'Images uploaded successfully.',
            submission: newSubmission 
        });
    } catch (error) {
        console.error('Upload Error:', error);
        res.status(500).json({ message: error.message || 'Server Error: Unable to upload images.' });
    }
    
};