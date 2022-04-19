const { Router } = require('express');
const passport = require('passport');
const modVerify = require('../middlewares/modVerify');

const { 
    getNewsController,
    getNewController,
    addNewController,
    editNewController,
    deleteNewController,   
 } = require('../controllers/new.controller');

const newRoutes = Router();

newRoutes.get('/news', getNewsController);
newRoutes.get('/new/:id', getNewController);
newRoutes.post('/new', passport.authenticate('jwt', { session: false }), modVerify, addNewController);
newRoutes.put('/new', passport.authenticate('jwt', { session: false }), modVerify, editNewController);
newRoutes.delete('/new', passport.authenticate('jwt', { session: false }), modVerify, deleteNewController);

module.exports = newRoutes;