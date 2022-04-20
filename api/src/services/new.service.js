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
        respuesta.img = data.img ? data.img : "no-image";
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

const addLikeNewService = async (_id, idNoticia) => {
    try {
        const respuesta = await New.findById(idNoticia);
        respuesta.likes.push(_id);
        await respuesta.save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const removeLikeNewService = async (_id, idNoticia) => {
    try {
        const respuesta = await New.findById(idNoticia);
        respuesta.likes = respuesta.likes.filter(id => id != _id);
        await respuesta.save();
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
    addLikeNewService,
    removeLikeNewService
};