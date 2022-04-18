const { Router } = require('express');

const { 
    getTeamsController,
    getEventsController,
    getCanchasController,
    addTeamsController,
    addEventsController,
    addCanchasController,
    editTeamsController,    
    editEventsController,    
    editCanchasController,
    deleteTeamsController,   
    deleteEventsController,   
    deleteCanchasController,   
 } = require('../controllers/utils.controller');

const utilsRoutes = Router();

utilsRoutes.get('/equipos', getTeamsController);
utilsRoutes.get('/eventos', getEventsController);
utilsRoutes.get('/canchas', getCanchasController);

utilsRoutes.post('/equipos', addTeamsController);
utilsRoutes.post('/eventos', addEventsController);
utilsRoutes.post('/canchas', addCanchasController);

utilsRoutes.put('/equipos', editTeamsController);
utilsRoutes.put('/eventos', editEventsController);
utilsRoutes.put('/canchas', editCanchasController);

utilsRoutes.delete('/equipos', deleteTeamsController);
utilsRoutes.delete('/eventos', deleteEventsController);
utilsRoutes.delete('/canchas', deleteCanchasController);

module.exports = utilsRoutes;