const {
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
    deleteCanchasService, 
} = require('../services/utils.service');

const getTeamsController = async (request, response) => {
    try{
        const respuesta = await getTeamsService();
        if(respuesta) {
            return response.status(200).json(respuesta);
        }
        else return response.status(404).json({ message: 'No hay equipos a mostrar' });
    }
    catch(e) {
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getEventsController = async (request, response) => {
    try{
        const respuesta = await getEventsService();
        if(respuesta) {
            return response.status(200).json(respuesta);
        }
        else return response.status(404).json({ message: 'No hay eventos a mostrar' });
    }
    catch(e) {
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getCanchasController = async (request, response) => {
    try{
        const respuesta = await getCanchasService();
        if(respuesta) {
            return response.status(200).json(respuesta);
        }
        else return response.status(404).json({ message: 'No hay canchas a mostrar' });
    }
    catch(e) {
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
};

const addTeamsController = async (request, response) => {
    const { nombre } = request.body;
    if(!nombre) {
        return response.status(400).json({ message: 'Faltan datos para agregar el equipo' });
    }

    try{
        const respuesta = await addTeamsService(nombre);
        if(respuesta) {
            return response.status(200).json({ message: 'Equipo agregado correctamente!' });
        }
        else return response.status(404).json({ message: 'Error al agregar equipo' });
    }
    catch(e) {
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
};

const addEventsController = async (request, response) => {
    const { nombre } = request.body;
    if(!nombre) {
        return response.status(400).json({ message: 'Faltan datos para agregar el evento' });
    }
    
    try{
        const respuesta = await addEventsService(nombre);
        if(respuesta) {
            return response.status(200).json({ message: 'Evento agregado correctamente!' });
        }
        else return response.status(404).json({ message: 'Error al agregar evento' });
    }
    catch(e) {
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
};

const addCanchasController = async (request, response) => {
    const { nombre } = request.body;
    if(!nombre) {
        return response.status(400).json({ message: 'Faltan datos para agregar la Cancha' });
    }
    
    try{
        const respuesta = await addCanchasService(nombre);
        if(respuesta) {
            return response.status(200).json({ message: 'Cancha agregada correctamente!' });
        }
        else return response.status(404).json({ message: 'Error al agregar la cancha' });
    }
    catch(e) {
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
};

const editTeamsController = async (request, response) => {
    const { _id, nombre } = request.body;
    if(!_id || !nombre) {
        return response.status(400).json({ message: 'Faltan datos para editar el Equipo' });
    }
    
    try{
        const respuesta = await editTeamsService(_id, nombre);
        if(respuesta) {
            return response.status(200).json({ message: 'Equipo editado correctamente!' });
        }
        else return response.status(404).json({ message: 'Error al editar el equipo' });
    }
    catch(e) {
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
};

const editEventsController = async (request, response) => {
    const { _id, nombre } = request.body;
    if(!_id || !nombre) {
        return response.status(400).json({ message: 'Faltan datos para editar el Evento' });
    }
    
    try{
        const respuesta = await editEventsService(_id, nombre);
        if(respuesta) {
            return response.status(200).json({ message: 'Evento editado correctamente!' });
        }
        else return response.status(404).json({ message: 'Error al editar el Evento' });
    }
    catch(e) {
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
};

const editCanchasController = async (request, response) => {
    const { _id, nombre } = request.body;
    if(!_id || !nombre) {
        return response.status(400).json({ message: 'Faltan datos para editar la cancha' });
    }
    
    try{
        const respuesta = await editCanchasService(_id, nombre);
        if(respuesta) {
            return response.status(200).json({ message: 'Equipo editado correctamente!' });
        }
        else return response.status(404).json({ message: 'Error al editar la cancha' });
    }
    catch(e) {
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteTeamsController = async (request, response) => {
    const { _id } = request.body;
    if(!_id) {
        return response.status(400).json({ message: 'Faltan datos para eliminar el Equipo' });
    }
    
    try{
        const respuesta = await deleteTeamsService(_id);
        if(respuesta) {
            return response.status(200).json({ message: 'Equipo eliminado correctamente!' });
        }
        else return response.status(404).json({ message: 'Error al eliminar el equipo' });
    }
    catch(e) {
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteEventsController = async (request, response) => {
    const { _id } = request.body;
    if(!_id) {
        return response.status(400).json({ message: 'Faltan datos para eliminar el evento' });
    }
    
    try{
        const respuesta = await deleteEventsService(_id);
        if(respuesta) {
            return response.status(200).json({ message: 'Evento eliminado correctamente!' });
        }
        else return response.status(404).json({ message: 'Error al eliminar el evento' });
    }
    catch(e) {
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteCanchasController = async (request, response) => {
    const { _id } = request.body;
    if(!_id) {
        return response.status(400).json({ message: 'Faltan datos para eliminar la cancha' });
    }
    
    try{
        const respuesta = await deleteCanchasService(_id);
        if(respuesta) {
            return response.status(200).json({ message: 'Cancha eliminada correctamente!' });
        }
        else return response.status(404).json({ message: 'Error al eliminar la cancha' });
    }
    catch(e) {
        return response.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getTeamsController,
    getEventsController,
    getCanchasController,
    addTeamsController,
    addEventsController,
    addCanchasController,
    editTeamsController,    
    editEventsController,    
    editCanchasController,
    deleteTeamsController,   
    deleteEventsController,   
    deleteCanchasController, 
}