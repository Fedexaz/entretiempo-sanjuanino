const newComment = require('../models/NewComment.model');

const getNewCommentsService = async (_id) => {
    try {
        let resultado = [];
        resultado = await newComment.find({ idNoticia: _id });
        return resultado.length ? resultado : false;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const addNewCommentService = async (data) => {
    try {
        const nuevoComentario = new newComment({
            ...data,
            fecha: new Date(),
            updatedAt: new Date()
        });
        await nuevoComentario.save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const editNewCommentService = async (_id, data) => {
    try {
        const comentario = await newComment.findById(_id);
        comentario.comentario = data.comentario;
        comentario.updatedAt = new Date();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const deleteNewCommentService = async (_id) => {
    try {
        await newComment.findByIdAndDelete(_id);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const addLikeNewCommentService = async (_id, idComentario) => {
    try {
        const respuesta = await newComment.findById(idComentario);
        respuesta.likes.push(_id);
        await respuesta.save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const removeLikeNewCommentService = async (_id, idComentario) => {
    try {
        const respuesta = await newComment.findById(idComentario);
        respuesta.likes = respuesta.likes.filter(id => id != _id);
        await respuesta.save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = {
    getNewCommentsService,
    addNewCommentService,
    editNewCommentService,
    deleteNewCommentService,
    addLikeNewCommentService,
    removeLikeNewCommentService
};