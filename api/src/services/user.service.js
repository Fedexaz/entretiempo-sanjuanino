const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const User = require('../models/User.model');

dotenv.config();

const userRegisterService = async (request) => {
    try {
        const user = await User.findOne({ email: request.email });
        if (user) throw new Error('El usuario ya existe');

        const newUser = new User(request);
        await newUser.save();

        return newUser;
    } catch (error) {
        throw error;
    }
};

const userLoginService = (user) => {
    const data = { id: String(user._id), email: user.email, userName: user.userName };
    const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '10d' });
    return token;
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
        const user = await User.findOne({ email: email });
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
    userPasswordService,
    userGetDataService,
    userEditService,
    userRecoverPasswordService
}