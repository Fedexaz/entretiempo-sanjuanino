const router = require('express').Router()
const server = require('express')()

const rutasAPIEquipos = require(`./rutasAPIEquipos`)

const rutasAPIPartidos = require(`./rutasAPIPartidos`)

const rutasAPIJugadores = require(`./rutasAPIJugadores`)

router.use('/api/equipos', rutasAPIEquipos)

router.use('/api/partidos', rutasAPIPartidos)

router.use('/api/jugadores', rutasAPIJugadores)

module.exports = router;