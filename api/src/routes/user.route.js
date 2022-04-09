const { Router } = require('express');
const {
    userRegisterController,
    userLoginController,
    userGetDataController,
    userEditController,
    userRecoverPasswordController
} = require('../controllers/user.controller');

const userRoutes = Router();

/* userRoutes.get('/', userGetDataController);
userRoutes.put('/', userEditController);
userRoutes.post('/register', userRegisterController);
userRoutes.post('/login', userLoginController);
userRoutes.post('/recover', userRecoverPasswordController); */

module.exports = userRoutes;