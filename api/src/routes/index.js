const { Router } = require('express');
const userRoutes = require('./user.route');

const rutas = Router();

rutas.use('/user', userRoutes);

module.exports = rutas;