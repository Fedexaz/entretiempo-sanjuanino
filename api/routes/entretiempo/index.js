const rutasEntretiempo = require('express').Router()

const rutaNoticias = require('./rutaNoticias')

const rutaPronosticos = require('./rutaPronosticos')

const { router } = require('./rutaUsuario')

rutasEntretiempo.use('/usuarios', router)

rutasEntretiempo.use('/pronosticos', rutaPronosticos)

rutasEntretiempo.use('/noticias', rutaNoticias)

module.exports = rutasEntretiempo