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
                include: [Team]
            })

            if(!resJugador) return res.status(404).send("ID de jugador no encontrado")
            
            return res.json(resJugador)
        } catch (error) {
            return res.send(error)
        }
    }
    else return res.status(400).send("ID inválido (mayor o igual a 1)")
})

/*

    RUTA ---------> /api/jugador/buscar

    Aquí se obtienen los jugadores buscados por nombre, departamento, altura, peso, posicion y numero, mientras trae su equipo

*/

//BUSCAR POR NOMBRE

route.get('/buscar/nombre/:nombre', async (req, res) => {
    const { nombre } = req.params;

    if(nombre){
        try {
            const resJugadores = await Player.findAll({
                where:{
                    nombre:{
                        [Op.iLike]: `%${nombre}%`
                    }
                },
                include: [Team]
            })
            return res.json(resJugadores)
        } catch (error) {
            return res.send(error)
        }
    }
    else return res.status(400).send("No has pasado ningun parámetro de búsqueda")
})

//BUSCAR POR DEPARTAMENTO

route.get('/buscar/departamento/:departamento', async (req, res) => {
    const { departamento } = req.params;

    if(departamento){
        try {
            const resJugadores = await Player.findAll({
                where:{
                    departamento:{
                        [Op.iLike]: `%${departamento}%`
                    }
                },
                include: [Team]
            })
            return res.json(resJugadores)
        } catch (error) {
            return res.send(error)
        }
    }
    else return res.status(400).send("No has pasado ningun parámetro de búsqueda")
})

//BUSCAR POR ALTURA

route.get('/buscar/altura/:altura', async (req, res) => {
    const { altura } = req.params;

    if(altura){
        try {
            const resJugadores = await Player.findAll({
                where:{
                    altura
                },
                include: [Team]
            })
            return res.json(resJugadores)
        } catch (error) {
            return res.send(error)
        }
    }
    else return res.status(400).send("No has pasado ningun parámetro de búsqueda")
})

//BUSCAR POR PESO

route.get('/buscar/peso/:peso', async (req, res) => {
    const { peso } = req.params;

    if(peso){
        try {
            const resJugadores = await Player.findAll({
                where:{
                    peso
                },
                include: [Team]
            })
            return res.json(resJugadores)
        } catch (error) {
            return res.send(error)
        }
    }
    else return res.status(400).send("No has pasado ningun parámetro de búsqueda")
})

//BUSCAR POR POSICION

route.get('/buscar/posicion/:posicion', async (req, res) => {
    const { posicion } = req.params;

    if(posicion){
        try {
            const resJugadores = await Player.findAll({
                where:{
                    posicion
                },
                include: [Team]
            })
            return res.json(resJugadores)
        } catch (error) {
            return res.send(error)
        }
    }
    else return res.status(400).send("No has pasado ningun parámetro de búsqueda")
})

//BUSCAR POR NUMERO DE CAMISETA

route.get('/buscar/numero/:numero', async (req, res) => {
    const { numero } = req.params;

    if(numero){
        try {
            const resJugadores = await Player.findAll({
                where:{
                    numero
                },
                include: [Team]
            })
            return res.json(resJugadores)
        } catch (error) {
            return res.send(error)
        }
    }
    else return res.status(400).send("No has pasado ningun parámetro de búsqueda")
})


//=====================================================================================================
//
//      AQUI VAN LAS RUTAS PARA EL PANEL ADMINISTRATIVO DE LA API
//
//=====================================================================================================

/*

    RUTA ---------> /api/jugadores/add

    Aquí se agrega un jugador, se relaciona con el equipo y devuelve el mismo como respuesta

*/

route.post('/add', async (req, res) => {
    const { nombre, equipoID, departamento, altura, peso, posicion, numero, foto, informacion } = req.body;

    if(!nombre || !equipoID || !departamento || !altura || !peso || !posicion || !numero || !foto || !informacion) return res.status(400).json({error: "Faltan algunos campos para agregar al jugador"})

    try {
        const newPlayer = await Player.create({
            nombre,
            equipoID,
            departamento,
            altura,
            peso,
            posicion,
            numero,
            foto,
            informacion
        })

        const teamPlayer = await Team.findByPk(equipoID)

        await teamPlayer.addPlayers(newPlayer)
        await newPlayer.setTeam(teamPlayer)

        return res.status(201).send({
            nombre,
            equipoID,
            departamento,
            altura,
            peso,
            posicion,
            numero,
            foto,
            informacion
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send(error)
    }
})

/*

    RUTA ---------> /api/equipos/edit/:id

    Aquí se edita un jugador por id y devuelve el mismo como respuesta

*/

route.put('/edit/:id', async (req, res) => {

    const { id } = req.params;

    if(!id || Number.isNaN(Number(id))) return res.status(400).send("ID inválido")

    if(Number(id) > 0){

        const { nombre, equipoID, departamento, altura, peso, posicion, numero, foto, informacion } = req.body;

        if(!nombre || !equipoID || !departamento || !altura || !peso || !posicion || !numero || !foto || !informacion) return res.status(400).json({error: "Faltan algunos campos para editar al jugador"})
    
        try {
            
            const playerToEdit = await Player.findByPk(Number(id))

            if(!playerToEdit) return res.status(404).send("ID de jugador no encontrado")

            playerToEdit.nombre = nombre
            playerToEdit.equipoID = equipoID
            playerToEdit.departamento = departamento
            playerToEdit.altura = altura
            playerToEdit.peso = peso
            playerToEdit.posicion = posicion
            playerToEdit.numero = numero
            playerToEdit.foto = foto
            playerToEdit.informacion = informacion

            const teamPlayer = await Team.findByPk(equipoID)

            await teamPlayer.addPlayers(playerToEdit)
            await playerToEdit.setTeam(teamPlayer)

            await playerToEdit.save() //Guardamos el jugador editado

            return res.status(200).send(playerToEdit)
        } catch (error) {
            return res.status(400).send(error)
        }
    }
    else return res.status(400).send("ID inválido (mayor o igual a 1)")
})


/*

    RUTA ---------> /api/jugadores/delete/:id

    Aquí se borra un jugador y devuelve un mensaje de exito o fallo

*/

route.delete('/delete/:id', async (req, res) => {

    const { id } = req.params;

    if(!id || Number.isNaN(Number(id))) return res.status(400).send("ID inválido")

    if(Number(id) > 0){

        try {
            const jugadorABorrar = await Player.findByPk(Number(id))

            if(!jugadorABorrar) return res.status(404).send("ID de jugador no encontrado")

            const name = jugadorABorrar.nombre
            
            await Player.destroy({
                where:{
                    id
                }
            })

            return res.status(200).send(`Jugador ${name} (ID: ${Number(id)}) eliminado correctamente!`)
        } catch (error) {
            return res.status(400).send(error)
        }
    }
    else return res.status(400).send("ID inválido (mayor o igual a 1)")
})

module.exports = route;