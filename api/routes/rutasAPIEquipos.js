const { Op } = require('sequelize')

const { Team, Player, Match } = require('../database')

const route = require('express').Router()

/*

    RUTA ---------> /api/equipos/

    Aqui se obtienen todos los equipos de la base de datos de entretiempo

*/

route.get('/', async (req, res) => {
    try {
        const resEquipos = await Team.findAll()
        return res.json(resEquipos)
    } catch (error) {
        return res.send(error)
    }
})

/*

    RUTA ---------> /api/equipos/id/:id

    Aquí se obtiene un equipo en concreto buscado por id

*/

route.get('/id/:id', async (req, res) => {
    const { id } = req.params;

    if(!id || Number.isNaN(Number(id))) return res.sendStatus(400)

    try {
        const resEquipo = await Team.findByPk(Number(id), {
            include: [Player, Match]
        })
        return res.json(resEquipo)
    } catch (error) {
        return res.send(error)
    }
})

/*

    RUTA ---------> /api/equipos/nombre/:nombre

    Aquí se obtienen los equipos buscados por nombre, sus jugadores y sus partidos

*/

route.get('/nombre/:nombre', async (req, res) => {
    const { nombre } = req.params;

    try {
        const resEquipos = await Team.findAll({
            where:{
                nombre: {
                    [Op.iLike]: `%${nombre}%`,
                }
            }
        })
        return res.json(resEquipos)
    } catch (error) {
        return res.send(error)
    }
})

module.exports = route;