const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const User = require('../models/User.model');

dotenv.config();

const userRegisterService = async (request) => {
    try {
        const user = await User.findOne({ email: request.email.toLowerCase() });
        if (user) throw new Error('El usuario ya existe');

        const newUser = new User({
            ...request,
            email: request.email.toLowerCase(),
            rol: 0
        });
        await newUser.save();

        return newUser;
    } catch (error) {
        throw error;
    }
};

const userLoginService = (user) => {
    return jwt.sign({ id: user._id, email: user.email, userName: user.userName, rol: user.rol, profilePic: user.profilePic, team: user.team }, process.env.JWT_SECRET, {
        expiresIn: '15m'
    });
};

const createRefreshTokenService = (user) => {
    return jwt.sign({ id: user._id, email: user.email, userName: user.userName, rol: user.rol, profilePic: user.profilePic, team: user.team }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '7d'
    });
};

const userPasswordService = async (user, password) => {
    try {
        const match = await user.comparePassword(password);
        return match;
    } catch (error) {
        throw error
    }
};

const userGetDataService = async (email) => {
    try {
        const user = await User.findOne({ email: email.toLowerCase() });
        return user;
    } catch (error) {
        throw error
    }
};

const userEditService = async (request, id) => {
    try {
        let salt, hash;

        if(request.body.password){
            salt = await bcrypt.genSalt(10);
            hash = await bcrypt.hash(request.body.password, salt);
        }

        const update = {
            ...request.body,
            password: request.body.password ? hash : 0
        };

        if(!request.body.password){
            delete update.password;
        }
        
        User.findById(id, async function (err, result) {
            if (err) return false;
            for(let i in update){
                console.log(i)
                result[i] = update[i];
            }
            await result.save();
        });

        return update;

    } catch (e) {
        throw e
    }
};

const userRecoverPasswordService = async () => {

};

module.exports = {
    userRegisterService,
    userLoginService,
    createRefreshTokenService,
    userPasswordService,
    userGetDataService,
    userEditService,
    userRecoverPasswordService
}