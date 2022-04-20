const { Router } = require('express');

const tokenAPIVerify = require('../middlewares/apiToken');

const tokenRoutes = require('./token.route');
const userRoutes = require('./user.route');
const matchRoutes = require('./match.route');
const utilsRoutes = require('./utils.route');
const newRoutes = require('./new.route')
const newCommentRoutes = require('./newComment.route');

//const tokenAPIRoutes = require('./tokenAPI.route');

const rutas = Router();

//Rutas entretiempo
rutas.use('/token', tokenRoutes);
rutas.use('/user', userRoutes);

//Rutas de noticias de entretiempo
rutas.use('/new', newRoutes);
rutas.use('/newComment', newCommentRoutes);

//Rutas API
rutas.use('/api/match', tokenAPIVerify, matchRoutes);

//Ruta para interactuar con la API
//rutas.use('/api', tokenAPIRoutes);

//Ruta con utilidades
rutas.use('/utils', tokenAPIVerify, utilsRoutes);

module.exports = rutas;