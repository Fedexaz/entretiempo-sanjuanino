const router = require('express').Router()

const { ApiKey } = require('../database')

const rutasAPIEquipos = require(`./rutasAPIEquipos`)

const rutasAPIPartidos = require(`./rutasAPIPartidos`)

const rutasAPIJugadores = require(`./rutasAPIJugadores`)

const entretiempoRouteController = require('./entretiempo/')

const comprobarApiKey = async (req, res, next) => {
    const { key } = req.query;

    if(!key) return res.status(403).send("No se ha proporcionado una API KEY")

    try {
        const apiKey = await ApiKey.findOne({
            where:{
                key,
                activa: true
            }
        })
    
        if(!apiKey) res.status(400).send("Si deseas acceder a la API debes comprar o renovar una API KEY en https://www.entretiemposj.com/apikey")

        console.log(apiKey)
    
        if(apiKey) return next()
    } catch (error) {
        return res.status(401).send("Ocurrió un error")
    }
}

router.use('/api', comprobarApiKey)

router.use('/api/equipos', rutasAPIEquipos)

router.use('/api/partidos', rutasAPIPartidos)

router.use('/api/jugadores', rutasAPIJugadores)

router.use('/entretiempo', entretiempoRouteController)

module.exports = router;