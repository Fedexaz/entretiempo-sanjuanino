const router = require('express').Router()

const rutaNoticias = require('./rutaNoticias')

const rutaPronosticos = require('./rutaPronosticos')

const rutaUsuarios = require('./rutaUsuario')

router.use('/usuarios', rutaUsuarios)

router.use('/pronosticos', rutaPronosticos)

router.use('/noticias', rutaNoticias)

module.exports = router