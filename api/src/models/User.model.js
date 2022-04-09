const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    profilePic:{
        type: String
    },
    country:{
        type: String
    },
    province:{
        type: String
    },
    departamento:{
        type: String
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