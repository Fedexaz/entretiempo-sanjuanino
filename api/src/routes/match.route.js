const { Router } = require('express');
const passport = require('passport');
const adminVerify = require('../middlewares/adminVerify');
const {
    getAllMatchesController,
    getMatchController,
    addMatchController,
    editMatchController,
    deleteMatchController
} = require('../controllers/match.controller');

const matchRoutes = Router();

matchRoutes.get('/', getMatchController);
matchRoutes.get('/all', getAllMatchesController);
matchRoutes.post('/', passport.authenticate('jwt', { session: false }), adminVerify, addMatchController);
matchRoutes.put('/', passport.authenticate('jwt', { session: false }), adminVerify, editMatchController);
matchRoutes.delete('/:id', passport.authenticate('jwt', { session: false }), adminVerify, deleteMatchController);

module.exports = matchRoutes;