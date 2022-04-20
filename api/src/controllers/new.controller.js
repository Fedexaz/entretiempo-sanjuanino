const {
    getNewsService,
    getNewService,
    addNewService,
    editNewService,
    deleteNewService,
    addLikeNewService,
    removeLikeNewService
} = require('../services/new.service');

const getNewsController = async (request, response) => {
    try {
        const respuesta = await getNewsService();
        if(respuesta) {
            return response.status(200).json(respuesta);
        }
        else {
            return response.status(404).json({ message: 'No hay noticias en la Base de Datos' });
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error al obtener las noticias.' });
    }
};

const getNewController = async (request, response) => {
    const { _id } = request.query;

    if(!_id) {
        return response.status(400).json({ message: 'ID de la noticia no especificado' });
    }

    try {
        const respuesta = await getNewService(_id);
        if(respuesta) {
            return response.status(200).json(respuesta);
        }
        else {
            return response.status(404).json({ message: 'No existe la noticia en la Base de Datos' });
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error al obtener las noticias.' });
    }
};

const addNewController = async (request, response) => {
    const { titulo, descripcion, hechaPor, createdAt } = request.body;

    if(!titulo || !descripcion || !hechaPor || !createdAt) {
        return response.status(400).json({ message: 'Faltan campos para agregar la noticia' });
    }

    try {
        const respuesta = await addNewService(request.body);
        if(respuesta) {
            return response.status(201).json({ message: 'Noticia agregada correctamente!' });
        }
        else {
            return response.status(401).json({ message: 'Error al agregar la noticia' });
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error interno del servidor.' });
    }
};

const editNewController = async (request, response) => {
    const { _id, titulo, descripcion, img } = request.body;

    if(!_id || !titulo || !descripcion) {
        return response.status(400).json({ message: 'Faltan campos para editar la noticia' });
    }

    try {
        const respuesta = await editNewService(_id, request.body);
        if(respuesta) {
            return response.status(200).json({ message: 'Noticia editada correctamente' });
        }
        else {
            return response.status(401).json({ message: 'Error al editar la noticia' });
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error interno del servidor.' });
    }
};

const deleteNewController = async (request, response) => {
    const { _id } = request.body;

    if(!_id) {
        return response.status(400).json({ message: 'Sin el ID de la noticia no puedo borrar nada!' });
    }

    try {
        const respuesta = deleteNewService(_id, request.body);
        if(respuesta) {
            return response.status(200).json({ message: 'Noticia eliminada correctamente' });
        }
        else {
            return response.status(401).json({ message: 'Error al eliminar la noticia' });
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error interno del servidor.' });
    }
};

const addLikeNewController = async (request, response) => {
    if(!request.body._id || !request.body.idNoticia) {
        return response.status(403).json({ message: 'Ups, algo ha salido mal' });
    }
    
    try {
        const respuesta = addLikeNewService(request.body._id, request.body.idNoticia);
        if(respuesta) {
            return response.status(200).json({ message: 'Like agregado correctamente! '});
        } 
        else {
            return response.status(400).json({ message: 'Error al darle like a la noticia' });
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error interno del servidor '});
    }
};

const removeLikeNewController = async (request, response) => {
    if(!request.body._id || !request.body.idNoticia) {
        return response.status(403).json({ message: 'Ups, algo ha salido mal' });
    }

    try {
        const respuesta = removeLikeNewService(request.body._id, request.body.idNoticia);
        if(respuesta) {
            return response.status(200).json({ message: 'Like eliminado correctamente! '});
        } 
        else {
            return response.status(400).json({ message: 'Error al eliminar el like de la noticia' });
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error interno del servidor '});
    }
};

module.exports = {
    getNewsController,
    getNewController,
    addNewController,
    editNewController,
    deleteNewController,
    addLikeNewController,
    removeLikeNewController,
};