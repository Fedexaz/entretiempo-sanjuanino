const { Router } = require('express');
const adminVerify = require('../middlewares/adminVerify');
const {
    getAllMatchesController,
    getMatchController,
    addMatchController,
    editMatchController,
    deleteMatchController
} = require('../controllers/match.controller');

const matchRoutes = Router();

matchRoutes.get('/all', getAllMatchesController);
matchRoutes.get('/:id', getMatchController);
matchRoutes.post('/', adminVerify, addMatchController);
matchRoutes.put('/', adminVerify, editMatchController);
matchRoutes.delete('/', adminVerify, deleteMatchController);

module.exports = matchRoutes;