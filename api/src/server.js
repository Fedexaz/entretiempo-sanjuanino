const Express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const connectToDB = require('./db');
const rutas = require('./routes');
const passport = require('passport');
const corsOptions = require('./config/cors.config');
const passportMiddleware = require('./middlewares/passport');

const server = Express();

connectToDB(); //Inicio conexión a DB

server.use(morgan('dev'));
server.use(cors(corsOptions));
server.use(Express.urlencoded({ extended: false }));
server.use(Express.json());
server.use(cookieParser());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use(passport.initialize());

passport.use(passportMiddleware);

server.use('/', rutas);

module.exports = server;