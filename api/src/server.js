const Express = require('express');
const morgan = require('morgan');

const connectToDB = require('./db');

const server = Express();

connectToDB(); //Inicio conexión a DB

server.use(Express.json());
server.use(morgan('dev'));


module.exports = server;