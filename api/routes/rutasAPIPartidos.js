const route = require('express').Router()

route.get('/', (req, res) => {
    res.json({
        "response": "Bienvenido a la API de entretiempo (Partidos)" 
    })
})

module.exports = route;