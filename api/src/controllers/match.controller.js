const {
    getAllMatchesService,
    getMatchService,
    addMatchService,
    editMatchService,
    deleteMatchService,
} = require('../services/match.service');

const getAllMatchesController = async (request, response) => {
    try {
        let matches = [];

        matches = await getAllMatchesService();
        
        if(matches.length){
            return response.status(200).json({ data: matches });
        }
        else {
            return response.status(404).json({ message: 'No hay partidos en la base de datos!' });
        }
    } catch (error) {
        throw Error(error);
    }
};

const getMatchController = async (request, response) => {
    if(!request.query.id){
        return response.status(400).json({ message: "No se ha proporcionado una ID de partido!"});
    }

    try {
        const match = await getMatchService(request.query.id);
        
        if(match){
            return response.status(200).json({ data: match });
        }
        else {
            return response.status(404).json({ message: 'No se encontró el partido!' });
        }
    } catch (error) {
        throw Error(error);
    }
};

const addMatchController = async (request, response) => {
    const { 
        teamLocal, 
        teamVisitante, 
        provincia, 
        departamento, 
        cancha, 
        jugado, 
        fechaJuego, 
        golesLocal, 
        golesVisitante, 
        evento, 
        creadoPor 
    } = request.body;
    if(!teamLocal || !teamVisitante || !provincia || !departamento || !cancha || (jugado === undefined) || !fechaJuego || !golesLocal || !golesVisitante || !evento || !creadoPor){
        return response.status(400).json({ message: "Faltan datos para agregar el partido!" })
    }

    try {
        const match = await addMatchService(request.body);
        
        if(match){
            return response.status(201).json({ message: "Partido agregado correctamente!" });
        }
        else {
            return response.status(404).json({ message: 'No se pudo agregar el partido!' });
        }
    } catch (error) {
        throw Error(error);
    }
};

const editMatchController = async (request, response) => {
    const {
        _id,
        teamLocal, 
        teamVisitante, 
        provincia, 
        departamento, 
        cancha, 
        jugado, 
        fechaJuego, 
        golesLocal, 
        golesVisitante, 
        evento, 
        creadoPor 
    } = request.body;
    if(!teamLocal || !teamVisitante || !provincia || !departamento || !cancha || (jugado === undefined) || !fechaJuego || !golesLocal || !golesVisitante || !evento || !creadoPor){
        return response.status(400).json({ message: "Faltan datos para editar el partido!" })
    }

    try {
        const match = await editMatchService(request.body);
        
        if(match){
            return response.status(201).json({ message: "Partido editado correctamente!" });
        }
        else {
            return response.status(404).json({ message: 'No se pudo editar el partido!' });
        }
    } catch (error) {
        throw Error(error);
    }
};

const deleteMatchController = async (request, response) => {
    if(!request.params.id){
        return response.status(400).json({ message: "ID no especificada" });
    }

    try {
        const match = await deleteMatchService(request.params.id);
        
        if(match){
            return response.status(201).json({ message: "Partido eliminado correctamente!" });
        }
        else {
            return response.status(404).json({ message: 'No se pudo eliminar el partido!' });
        }
    } catch (error) {
        throw Error(error);
    }
};

module.exports = {
    getAllMatchesController,
    getMatchController,
    addMatchController,
    editMatchController,
    deleteMatchController
}