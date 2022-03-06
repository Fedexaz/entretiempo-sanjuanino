/*

  AQUI SE CONFIGURA LO NECESARIO PARA EL FUNCIONAMIENTO CORRECTO DEL SERVIDOR

*/

require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const router = require('./routes/');

const server = express();

const passport = require('passport')
const session = require('express-session')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const { salt } = require('./routes/entretiempo/rutaUsuario')

const authUser = async (email, password, cb) => {

    try {
        const user = await User.findOne({
            attributes: ['nombre', 'apellido', 'email', 'password', 'puntos', 'rango'],
            where:{
                email,
            }
        });

        if (!user) { return cb(null, false, { message: 'Usuario inexistente.' }); }

        const hash = bcrypt.hashSync(password, salt)

        if(hash === user.password){
            return cb(null, user);
        }
        else{
            return cb(null, false, { message: 'Contraseña incorrecta.' });
        }
    } catch (err) {
        if (err) { return cb(err); }
    }
    
}

server.name = 'API Entretiempo';

server.use(session({
  secret: process.env.SECRET_EXPRESS_SESION,
  resave: false ,
  saveUninitialized: true ,
}))
server.use(passport.initialize()) 
server.use(passport.session()) 

passport.use(new LocalStrategy (authUser))

passport.serializeUser( (userObj, done) => {
  done(null, userObj)
})

passport.deserializeUser((userObj, done) => {
  done (null, userObj )
})

server.use(cors())
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

server.use('/', router);

server.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;