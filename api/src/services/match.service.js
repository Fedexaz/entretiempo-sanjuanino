const Match = require('../models/Match.model');

const getAllMatchesService = async (request) => {
    try {
        const matches = await Match.find();
        return matches;
    } catch (error) {
        throw Error(error);
    }
};

const getMatchService = async (id) => {
    try {
        const match = await Match.findById(id);
        return match ? match : false;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const addMatchService = async (data) => {
    try{
        const match = await new Match(data);
        await match.save();
        return true;
    }
    catch(e){
        console.log(error);
        return false;
    }
};

const editMatchService = async (data) => {
    try{
        const match = await Match.findById(data._id);
        
        match.teamLocal = data.teamLocal;
        match.teamVisitante = data.teamVisitante;
        match.provincia = data.provincia;
        match.departamento = data.departamento;
        match.cancha = data.cancha;
        match.jugado = data.jugado;
        match.fechaJuego = data.fechaJuego;
        match.golesLocal = data.golesLocal;
        match.golesVisitante = data.golesVisitante;
        match.evento = data.evento;
        match.creadoPor = data.creadoPor;

        await match.save();

        return true;
    }
    catch(e){
        console.log(error);
        return false;
    }
};

const deleteMatchService = async (id) => {
    try {
        await Match.findByIdAndDelete(id);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = {
    getAllMatchesService,
    getMatchService,
    addMatchService,
    editMatchService,
    deleteMatchService
}