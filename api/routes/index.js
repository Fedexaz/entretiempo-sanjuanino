const router = require('express').Router()

const rutasAPIEquipos = require(`./rutasAPIEquipos`)

const rutasAPIPartidos = require(`./rutasAPIPartidos`)

const rutasAPIJugadores = require(`./rutasAPIJugadores`)


router.use('/api/equipos', rutasAPIEquipos)

router.use('/api/partidos', rutasAPIPartidos)

router.use('/api/jugadores', rutasAPIJugadores)

//router.use('/api')

module.exports = router;