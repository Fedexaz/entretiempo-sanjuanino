const Express = require('express');
const morgan = require('morgan');
const rutas = require('./routes');
const server = Express();

const connectToDB = require('./db');

connectToDB(); //Inicio conexión a DB

server.use(Express.json());
server.use(morgan('dev'));

server.use(rutas);

module.exports = server;