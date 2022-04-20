const {
    getNewCommentsService,
    addNewCommentService,
    editNewCommentService,
    deleteNewCommentService,
    addLikeNewCommentService,
    removeLikeNewCommentService
} = require('../services/newComment.service');

const getNewCommentsController = async (request, response) => {
    const { newId } = request.params;
    try {
        const respuesta = await getNewCommentsService(newId);
        if(respuesta.length) {
            return response.status(200).json(respuesta);
        }
        else {
            return response.status(404).json({ message: 'Esta noticia no tiene comentarios' });
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
};

const addNewCommentController = async (request, response) => {
    const { usuario, idNoticia, comentario } = request.body;

    if(!usuario || !idNoticia || !comentario) {
        return response.status(400).json({ message: "Faltan datos para agregar el comentario" });
    }

    try {
        const respuesta = await addNewCommentService(request.body);
        if(respuesta) {
            return response.status(200).json(respuesta);
        }
        else {
            return response.status(404).json({ message: 'Error al agregar comentario' });
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
};

const editNewCommentController = async (request, response) => {
    const { comentario } = request.query;
    
    if(!_id || !comentario) {
        return response.status(400).json({ message: "Faltan datos para agregar el comentario" });
    }
    
    try {
        const respuesta = await editNewCommentService(request.query);
        if(respuesta) {
            return response.status(200).json({ message: 'Comentario agregado correctamente' });
        }
        else {
            return response.status(404).json({ message: 'Error al editar el comentario' });
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteNewCommentController = async (request, response) => {
    const { _id } = request.query;
    
    if(!_id) {
        return response.status(400).json({ message: "ID no proporcionado" });
    }

    try {
        const respuesta = await deleteNewCommentService(request.query);
        if(respuesta) {
            return response.status(200).json({ message: 'Comentario eliminado correctamente' });
        }
        else {
            return response.status(404).json({ message: 'Error al eliminar el comentario' });
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
};

const addLikeNewCommentController = async (request, response) => {
    if(!request.body._id || !request.body.idComentario) {
        return response.status(403).json({ message: 'Ups, algo ha salido mal' });
    }
    
    try {
        const respuesta = addLikeNewCommentService(request.body._id, request.body.idComentario);
        if(respuesta) {
            return response.status(200).json({ message: 'Like agregado correctamente! '});
        } 
        else {
            return response.status(400).json({ message: 'Error al darle like al comentario' });
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error interno del servidor '});
    }
};

const removeLikeNewCommentController = async (request, response) => {
    if(!request.body._id || !request.body.idComentario) {
        return response.status(403).json({ message: 'Ups, algo ha salido mal' });
    }

    try {
        const respuesta = removeLikeNewCommentService(request.body._id, request.body.idComentario);
        if(respuesta) {
            return response.status(200).json({ message: 'Like eliminado correctamente! '});
        } 
        else {
            return response.status(400).json({ message: 'Error al eliminar el like del comentario' });
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error interno del servidor '});
    }
};

module.exports = {
    getNewCommentsController,
    addNewCommentController,
    editNewCommentController,
    deleteNewCommentController,
    removeLikeNewCommentController,
    addLikeNewCommentController
};