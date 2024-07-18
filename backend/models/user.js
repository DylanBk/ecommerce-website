const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: false,
        unique: false
    },
    password: {
        type: String,
        required: true,
        unique: false,
    },
    role: {
        type: String,
        default: "User"
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;