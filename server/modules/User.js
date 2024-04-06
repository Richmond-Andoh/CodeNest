import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        default: ""
    },

    profileUrl: {
        type: String,
        required: true
    },

    avatarUrl: {
        type: String
    },

    likedProfile: {
        type: String,
        default: []
    },

    likedBy: [
        {
            username: {
                type: String,
                required: true
            },

            avatarUrl: {
                type: String
            },

            dateLiked: {
                type: Date,
                default: Date.now()
            }
        }
    ]
}, { timeStamp: true })

const User = mongoose.model("User", userSchema);

export default User;