const { Router } = require('express');

const tokenAPIVerify = require('../middlewares/apiToken');

const userRoutes = require('./user.route');
const eventRoutes = require('./event.route');
const matchRoutes = require('./match.route');
const playerRoutes = require('./player.route');
const teamRoutes = require('./team.route');
const tokenAPIRoutes = require('./tokenAPI.route');
const utilsRoutes = require('./utils.route');

const rutas = Router();

//Rutas entretiempo
rutas.use('/user', userRoutes);

//Rutas API
//rutas.use('/api/event', tokenAPIVerify, eventRoutes);
rutas.use('/api/match', tokenAPIVerify, matchRoutes);
//rutas.use('/api/player', tokenAPIVerify, playerRoutes);
//rutas.use('/api/team', tokenAPIVerify, teamRoutes);

//Ruta para interactuar con la API
//rutas.use('/tokenAPI', tokenAPIRoutes);

//Ruta con utilidades
rutas.use('/utils', tokenAPIVerify, utilsRoutes);

module.exports = rutas;