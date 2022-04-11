const bcrypt = require('bcrypt');
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
    rol: {
        type: Number,
        required: true,
        default: 0
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

userSchema.pre('save', async function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch (error) {
        throw error;
    }
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = model("User", userSchema);