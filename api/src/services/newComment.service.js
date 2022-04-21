const newComment = require('../models/NewComment.model');
const New = require('../models/New.model');

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
        const noticia = await New.findById(nuevoComentario.idNoticia);
        noticia.comments++;
        await nuevoComentario.save();
        await noticia.save();
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
        const comentario = await newComment.findById(_id);
        const noticia = New.findById(comentario.idNoticia);
        noticia.comments--;
        await noticia.save();
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
        if(!respuesta.likes.find(el => el === _id)) {
            respuesta.likes.push(_id);
        }
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