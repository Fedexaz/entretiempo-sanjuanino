const ListTeams = require('../models/ListTeams.model');
const ListEvents = require('../models/ListEvents.model');
const ListCanchas = require('../models/ListCanchas.model');

const getTeamsService = async () => {
    try {
        let respuesta = [];
        respuesta = await ListTeams.find();
        return respuesta.length ? respuesta : false;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const getEventsService = async () => {
    try {
        let respuesta = [];
        respuesta = await ListEvents.find();
        return respuesta.length ? respuesta : false;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const getCanchasService = async () => {
    try {
        let respuesta = [];
        respuesta = await ListCanchas.find();
        return respuesta.length ? respuesta : false;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const addTeamsService = async (nombre) => {
    try {
        const data = new ListTeams({ nombre });
        await data.save();
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};

const addEventsService = async (nombre) => {
    try {
        const data = new ListEvents({ nombre });
        await data.save();
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};

const addCanchasService = async (nombre) => {
    try {
        const data = new ListCanchas({ nombre });
        await data.save();
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};

const editTeamsService = async (_id, nombre) => {
    try {
        const data = await ListTeams.findById(_id);

        data.nombre = nombre;

        await data.save();
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};

const editEventsService = async (_id, nombre) => {
    try {
        const data = await ListEvents.findById(_id);

        data.nombre = nombre;

        await data.save();
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};

const editCanchasService = async (_id, nombre) => {
    try {
        const data = await ListCanchas.findById(_id);

        data.nombre = nombre;

        await data.save();
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};

const deleteTeamsService = async (_id) => {
    try {
        await ListTeams.findByIdAndDelete(_id);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};

const deleteEventsService = async (_id) => {
    try {
        await ListEvents.findByIdAndDelete(_id);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};

const deleteCanchasService = async (_id) => {
    try {
        await ListCanchas.findByIdAndDelete(_id);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = {
    getTeamsService,
    getEventsService,
    getCanchasService,
    addTeamsService,
    addEventsService,
    addCanchasService,
    editTeamsService,
    editEventsService,
    editCanchasService,
    deleteTeamsService,
    deleteEventsService,
    deleteCanchasService
};