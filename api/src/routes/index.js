const { Router } = require('express');
const userRoutes = require('./user.route');

const eventRoutes = require('./event.route');
const matchRoutes = require('./match.route');
const playerRoutes = require('./player.route');
const teamRoutes = require('./team.route');
const tokenAPIRoutes = require('./tokenAPI.route');

const rutas = Router();

rutas.use('/user', userRoutes);

rutas.use('/api/event', eventRoutes);
rutas.use('/api/match', matchRoutes);
rutas.use('/api/player', playerRoutes);
rutas.use('/api/team', teamRoutes);
rutas.use('/tokenAPI', tokenAPIRoutes);

module.exports = rutas;