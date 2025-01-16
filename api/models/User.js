import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    username :{
        type: String,
        required: true,
    },
    social_media_handel :{
        type: String,
        required: true,
    },
    image : {
        type: [String],
        required: false,
    }
});
const User = mongoose.model('User', UserSchema);
export default User;