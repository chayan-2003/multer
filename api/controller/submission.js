import User from '../models/User.js';

export const createSubmission = async (req, res) => {
    try {
        let images = [];

        if (req.files && req.files.length > 0) {
            images = req.files.map(file => file.path);
        }

        const user = await User.create({
            username: req.body.username,
            social_media_handel: req.body.social_media_handel,
            image: images
        });

        res.status(201).json({
            status: 'success',
            data: {
                username: user.username,
                social_media_handel: user.social_media_handel,
                images: user.image
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message || 'Unable to create submission',
        });
    }
};