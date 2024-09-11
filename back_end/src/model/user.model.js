import mongoose from "mongoose";
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    profilePic: {
        type: String,
        default: 'https://console.cloudinary.com/pm/c-98b5e068b8b334d09c66ccaa70f79f/media-explorer?assetId=994c7a5388026312d0057eddb0515a93'
    },
    phone:{
        type: String,
        default: ""
    }
});


const User = mongoose.model('User', userSchema);
export { User };