const { Op } = require('sequelize')

const { Team, Player, Match } = require('../database')

const route = require('express').Router()

//=====================================================================================================
//
//      AQUI VAN LAS RUTAS PARA LOS QUE TENGAN EL ACCESO A LOS DATOS DE LA API (JUGADORES)
//
//=====================================================================================================

/*

    RUTA ---------> /api/jugadores/

    Aqui se obtienen todos los jugadores de la base de datos de entretiempo

*/

route.get('/', async (req, res) => {
    try {
        const resJugadores = await Player.findAll()
        return res.json(resJugadores)
    } catch (error) {
        return res.send(error)
    }
})

/*

    RUTA ---------> /api/jugadores/id/:id

    Aquí se obtiene un jugador en concreto buscado por id

*/

route.get('/id/:id', async (req, res) => {
    const { id } = req.params;

    if(!id || Number.isNaN(Number(id))) return res.status(400).send("ID inválido")

    if(Number(id) > 0){
        try {
            const resJugador = await Player.findByPk(Number(id), {
                include: [Team, Match]
            })
            return res.json(resJugador)
        } catch (error) {
            return res.send(error)
        }
    }
    else return res.status(400).send("ID inválido (mayor o igual a 1)")
})

/*

    RUTA ---------> /api/jugador/buscar

    Aquí se obtienen los jugadores buscados por nombre, su equipo y sus partidos

*/

route.get('/nombre/:nombre', async (req, res) => {
    const { nombre } = req.params;

    try {
        const resEquipos = await Team.findAll({
            where:{
                nombre: {
                    [Op.iLike]: `%${nombre}%`,
                }
            },
            include: [Player, Match]
        })
        return res.json(resEquipos)
    } catch (error) {
        return res.send(error)
    }
})

//=====================================================================================================
//
//      AQUI VAN LAS RUTAS PARA EL PANEL ADMINISTRATIVO DE LA API
//
//=====================================================================================================

/*

    RUTA ---------> /api/equipos/add

    Aquí se agrega un equipo y devuelve el mismo como respuesta

*/

route.post('/add', async (req, res) => {
    const { nombre, urlEscudo, pagina, fechaCreacion, siglas, departamento } = req.body;

    if(!nombre || !urlEscudo || !pagina || !fechaCreacion || !siglas || !departamento) return res.status(400).json({error: "Faltan algunos campos para agregar el equipo"})

    try {
        await Team.create({
            nombre,
            urlEscudo,
            pagina,
            fechaCreacion,
            siglas,
            departamento
        })
        return res.status(201).send({
            nombre,
            urlEscudo,
            pagina,
            fechaCreacion,
            siglas,
            departamento
        })
    } catch (error) {
        return res.status(400).send(error)
    }
})

/*

    RUTA ---------> /api/equipos/edit/:id

    Aquí se edita un equipo y devuelve el mismo como respuesta

*/

route.put('/edit/:id', async (req, res) => {

    const { id } = req.params;

    if(!id || Number.isNaN(Number(id))) return res.status(400).send("ID inválido")

    if(Number(id) > 0){

        const { nombre, urlEscudo, pagina, fechaCreacion, siglas, departamento } = req.body;

        if(!nombre || !urlEscudo || !pagina || !fechaCreacion || !siglas || !departamento) return res.status(400).json({error: "Faltan algunos campos para agregar el equipo"})

        try {
            
            const teamToEdit = await Team.findByPk(Number(id))

            teamToEdit.nombre = nombre
            teamToEdit.urlEscudo = urlEscudo
            teamToEdit.pagina = pagina
            teamToEdit.fechaCreacion = fechaCreacion
            teamToEdit.siglas = siglas
            teamToEdit.departamento = departamento

            await teamToEdit.save() //Guardamos el equipo editado

            return res.status(200).send(teamToEdit)
        } catch (error) {
            return res.status(400).send(error)
        }
    }
    else return res.status(400).send("ID inválido (mayor o igual a 1)")
})

route.delete('/delete/:id', async (req, res) => {

    const { id } = req.params;

    if(!id || Number.isNaN(Number(id))) return res.status(400).send("ID inválido")

    if(Number(id) > 0){

        try {
            const teamToEdit = await Team.findByPk(Number(id))
            const name = teamToEdit.nombre
            
            await Team.destroy({
                where:{
                    id
                }
            })

            return res.status(200).send(`${name} (ID: ${Number(id)}) eliminado correctamente!`)
        } catch (error) {
            return res.status(400).send(error)
        }
    }
    else return res.status(400).send("ID inválido (mayor o igual a 1)")
})

module.exports = route;