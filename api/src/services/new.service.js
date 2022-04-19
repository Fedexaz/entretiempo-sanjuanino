const New = require('../models/New.model');

const getNewsService = async () => {
    try {
        let respuesta = [];
        respuesta = await New.find();
        return respuesta.length ? respuesta : false;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const getNewService = async (_id) => {
    try {
        const respuesta = await New.findOne({ _id });
        return respuesta ? respuesta : false;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const addNewService = async (data) => {
    try {
        const noticia = new New({
            ...data,
            createdAt: new Date()
        });
        await noticia.save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const editNewService = async (_id, data) => {
    try {
        const respuesta = await New.findById(_id);
        respuesta.titulo = data.titulo;
        respuesta.descripcion = data.descripcion;
        await respuesta.save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const deleteNewService = async (_id) => {
    try {
        await New.findByIdAndDelete(_id);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = {
    getNewsService,
    getNewService,
    addNewService,
    editNewService,
    deleteNewService,
};