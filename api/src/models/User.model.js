const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    team: {
        type: String
    },
    createdAt:{
        type: Date
    },
    lastConnected: {
        type: Date
    }
});

module.exports = model("User", userSchema);