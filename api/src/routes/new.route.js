const { Router } = require('express');
const passport = require('passport');
const modVerify = require('../middlewares/modVerify');

const {
    getNewsController,
    getNewController,
    addNewController,
    editNewController,
    deleteNewController,
    addLikeNewController,
    removeLikeNewController,
} = require('../controllers/new.controller');

const newRoutes = Router();

newRoutes.get('/all', getNewsController);
newRoutes.get('/', getNewController);
newRoutes.post('/', passport.authenticate('jwt', { session: false }), modVerify, addNewController);
newRoutes.put('/', passport.authenticate('jwt', { session: false }), modVerify, editNewController);
newRoutes.delete('/', passport.authenticate('jwt', { session: false }), modVerify, deleteNewController);

newRoutes.post('/like', passport.authenticate('jwt', { session: false }), addLikeNewController);
newRoutes.delete('/like', passport.authenticate('jwt', { session: false }), removeLikeNewController);

module.exports = newRoutes;