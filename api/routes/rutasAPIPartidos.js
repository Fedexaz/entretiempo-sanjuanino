const { Op } = require('sequelize')
const { checkAuthenticatedAdmin } = require('../controllers/auth')

const { Team, Player, Match } = require('../database')

const route = require('express').Router()

//=====================================================================================================
//
//      AQUI VAN LAS RUTAS PARA LOS QUE TENGAN EL ACCESO A LOS DATOS DE LA API (PARTIDOS)
//
//=====================================================================================================

/*

    RUTA ---------> /api/partidos/

    Aqui se obtienen todos los partidos de la base de datos de entretiempo

*/

route.get('/', async (req, res) => {
    try {
        let resPartidos = await Match.findAll()

        if(resPartidos.length){
            resPartidos = resPartidos.map(async (partido) => {
                const resEquipoLocal = await Team.findByPk(partido.idLocal, { include: Player })
                const resEquipoVisitante = await Team.findByPk(partido.idVisitante, { include: Player })
    
                return res.json({
                    ...partido,
                    local:{
                        ...resEquipoLocal,
                    },
                    visitante:{
                        ...resEquipoVisitante
                    }
                })
            })
        }
        return res.json(resPartidos)
    } catch (error) {
        return res.send(error)
    }
})

/*

    RUTA ---------> /api/partidos/id/:id

    Aquí se obtiene un partido en concreto buscado por id (incluyendo los equipos)

*/

route.get('/id/:id', async (req, res) => {
    const { id } = req.params;

    if(!id || Number.isNaN(Number(id))) return res.status(400).send("ID inválido")

    if(Number(id) > 0){
        try {
            const resPartido = await Match.findByPk(Number(id))
            
            if(!resPartido) return res.status(404).send("ID de partido no encontrado")

            
            const resEquipoLocal = await Team.findByPk(resPartido.idLocal, { include: Player })
            const resEquipoVisitante = await Team.findByPk(resPartido.idVisitante, { include: Player })

            return res.json({
                ...resPartido, 
                local:{
                    ...resEquipoLocal, 
                },
                visitante:{
                    ...resEquipoVisitante
                }
            })
        } catch (error) {
            return res.send(error)
        }
    }
    else return res.status(400).send("ID inválido (mayor o igual a 1)")
})

/*

    RUTA ---------> /api/partidos/nombre/:nombre

    Aquí se obtienen los partidos buscados por fechaPartido, hora, lugar, cancha, evento, fechaevento, trayendo los jugadores y sus equipos

*/

route.get('/fechaEvento/:fechaEvento', async (req, res) => {
    const { fechaEvento } = req.params;

    try {
        const resPartidos = await Match.findAll({
            where:{
                fechaEvento
            },
        })

        if(resPartidos.length){
            resPartidos = resPartidos.map(async (partido) => {
                const resEquipoLocal = await Team.findByPk(partido.idLocal, { include: Player })
                const resEquipoVisitante = await Team.findByPk(partido.idVisitante, { include: Player })
    
                return res.json({
                    ...partido,
                    local:{
                        ...resEquipoLocal,
                    },
                    visitante:{
                        ...resEquipoVisitante
                    }
                })
            })
        }
        return res.send(resPartidos)
    } catch (error) {
        return res.send(error)
    }
})

route.get('/evento/:evento', async (req, res) => {
    const { evento } = req.params;

    try {
        const resPartidos = await Match.findAll({
            where:{
                evento
            },
        })
        
        if(resPartidos.length){
            resPartidos = resPartidos.map(async (partido) => {
                const resEquipoLocal = await Team.findByPk(partido.idLocal, { include: Player })
                const resEquipoVisitante = await Team.findByPk(partido.idVisitante, { include: Player })
    
                return res.json({
                    ...partido,
                    local:{
                        ...resEquipoLocal,
                    },
                    visitante:{
                        ...resEquipoVisitante
                    }
                })
            })
        }
        return res.send(resPartidos)
    } catch (error) {
        return res.send(error)
    }
})

route.get('/cancha/:cancha', async (req, res) => {
    const { cancha } = req.params;

    try {
        const resPartidos = await Match.findAll({
            where:{
                cancha
            },
        })
        
        if(resPartidos.length){
            resPartidos = resPartidos.map(async (partido) => {
                const resEquipoLocal = await Team.findByPk(partido.idLocal, { include: Player })
                const resEquipoVisitante = await Team.findByPk(partido.idVisitante, { include: Player })
    
                return res.json({
                    ...partido,
                    local:{
                        ...resEquipoLocal,
                    },
                    visitante:{
                        ...resEquipoVisitante
                    }
                })
            })
        }
        return res.send(resPartidos)
    } catch (error) {
        return res.send(error)
    }
})

route.get('/fechaPartido/:fechaPartido', async (req, res) => {
    const { fechaPartido } = req.params;

    try {
        const resPartidos = await Match.findAll({
            where:{
                fechaPartido
            },
        })
        
        if(resPartidos.length){
            resPartidos = resPartidos.map(async (partido) => {
                const resEquipoLocal = await Team.findByPk(partido.idLocal, { include: Player })
                const resEquipoVisitante = await Team.findByPk(partido.idVisitante, { include: Player })
    
                return res.json({
                    ...partido,
                    local:{
                        ...resEquipoLocal,
                    },
                    visitante:{
                        ...resEquipoVisitante
                    }
                })
            })
        }
        return res.send(resPartidos)
    } catch (error) {
        return res.send(error)
    }
})


route.get('/hora/:hora', async (req, res) => {
    const { hora } = req.params;

    try {
        const resPartidos = await Match.findAll({
            where:{
                hora
            },
        })
       
        if(resPartidos.length){
            resPartidos = resPartidos.map(async (partido) => {
                const resEquipoLocal = await Team.findByPk(partido.idLocal, { include: Player })
                const resEquipoVisitante = await Team.findByPk(partido.idVisitante, { include: Player })
    
                return res.json({
                    ...partido,
                    local:{
                        ...resEquipoLocal,
                    },
                    visitante:{
                        ...resEquipoVisitante
                    }
                })
            })
        }
        return res.send(resPartidos)
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

    RUTA ---------> /api/partidos/add

    Aquí se agrega un partido y devuelve el mismo como respuesta

*/

route.post('/add', checkAuthenticatedAdmin, async (req, res) => {
    const { fechaPartido, hora, lugar, cancha, evento, fechaEvento, idLocal, idVisitante, golesLocal, golesVisitante, jugado } = req.body;

    if(!fechaPartido || !hora || !lugar || !cancha || !evento || !fechaEvento) return res.status(400).json({error: "Faltan algunos campos para agregar el partido"})

    try {
        const partido = await Match.create({
            fechaPartido,
            hora,
            lugar,
            cancha,
            evento,
            fechaEvento,
            idLocal,
            idVisitante,
            golesLocal,
            golesVisitante,
            jugado
        })

        return res.status(201).send({
            fechaPartido,
            hora,
            lugar,
            cancha,
            evento,
            fechaEvento,
            idLocal,
            idVisitante,
            golesLocal,
            golesVisitante,
            jugado
        })
    } catch (error) {
        return res.status(400).send(error)
    }
})

/*

    RUTA ---------> /api/partidos/edit/:id

    Aquí se edita un partido y devuelve el mismo como respuesta

*/

route.put('/edit/:id', checkAuthenticatedAdmin, async (req, res) => {

    const { id } = req.params;

    if(!id || Number.isNaN(Number(id))) return res.status(400).send("ID inválido")

    if(Number(id) > 0){

        const { fechaPartido, hora, lugar, cancha, evento, fechaEvento, idLocal, idVisitante, golesLocal, golesVisitante, jugado } = req.body;

        if(!fechaPartido || !hora || !lugar || !cancha || !evento || !fechaEvento || !idLocal || !golesLocal || !golesVisitante || !jugado) return res.status(400).json({error: "Faltan algunos campos para editar el partido"})

        try {
            
            const matchToEdit = await Match.findByPk(Number(id))

            if(!matchToEdit) return res.status(404).send("ID de partido no encontrado")

            matchToEdit.fechaPartido = fechaPartido
            matchToEdit.hora = hora
            matchToEdit.lugar = lugar
            matchToEdit.cancha = cancha
            matchToEdit.evento = evento
            matchToEdit.fechaEvento = fechaEvento
            matchToEdit.idLocal = idLocal
            matchToEdit.idVisitante = idVisitante
            matchToEdit.golesLocal = golesLocal
            matchToEdit.golesVisitante = golesVisitante
            matchToEdit.jugado = jugado

            await matchToEdit.save() //Guardamos el equipo editado

            return res.status(200).send(matchToEdit)
        } catch (error) {
            return res.status(400).send(error)
        }
    }
    else return res.status(400).send("ID inválido (mayor o igual a 1)")
})

/*

    RUTA ---------> /api/partidos/delete/:id

    Aquí se borra un partidos y devuelve un mensaje de exito o fallo

*/

route.delete('/delete/:id', checkAuthenticatedAdmin, async (req, res) => {

    const { id } = req.params;

    if(!id || Number.isNaN(Number(id))) return res.status(400).send("ID inválido")

    if(Number(id) > 0){

        try {
            await Match.destroy({
                where:{
                    id
                }
            })

            return res.status(200).send(`Partido (ID: ${Number(id)}) eliminado correctamente!`)
        } catch (error) {
            return res.status(400).send(error)
        }
    }
    else return res.status(400).send("ID inválido (mayor o igual a 1)")
})

module.exports = route;