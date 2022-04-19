const { Router } = require('express');
const passport = require('passport');
const {
    userRegisterController,
    userLoginController,
    userGetDataController,
    userEditController,
    userRecoverPasswordController
} = require('../controllers/user.controller');

const userRoutes = Router();

userRoutes.get('/', passport.authenticate('jwt', { session: false }), userGetDataController);
userRoutes.put('/', passport.authenticate('jwt', { session: false }), userEditController);
userRoutes.post('/register', userRegisterController);
userRoutes.post('/login', userLoginController);
userRoutes.post('/recover', userRecoverPasswordController);

module.exports = userRoutes;