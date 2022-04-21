export const getNews = async (axios) => {
    try {
        const respuesta = await axios.get('/new/all');
        return respuesta.data;
    } catch (error) {
        console.log(error.response.data.message);
        return [];
    }
};

export const getNew = async (axios, id) => {
    try {
        const respuesta = await axios.get(`/new/?_id=${id}`);
        return respuesta.data;
    } catch (error) {
        console.log(error.response.data.message);
        return {};
    }
};

export const getNewComments = async (axios, id) => {
    try {
        const respuesta = await axios.get(`/newComment/${id}`);
        return respuesta.data;
    } catch (error) {
        console.log(error.response.data.message);
        return [];
    }
};

export const addNewComment = async (axios, id, comentario) => {
    try {
        const usuario = JSON.parse(localStorage.getItem('data')).userName;
        const respuesta = await axios.post(`/newComment/`, {
            comentario,
            idNoticia: id,
            usuario
        });
        return respuesta.data ? true : false;
    } catch (error) {
        console.log(error.response);
        return false;
    }
};

export const addNewLike = async (axios, _id, idNoticia) => {
    try {
        const respuesta = await axios.post(`/new/like/`, { _id, idNoticia });
        return respuesta.data ? true : false;
    } catch (error) {
        console.log(error.response.data.message);
        return false;
    }
};

export const addNewLikeComment = async (axios, _id, idComentario) => {
    try {
        const respuesta = await axios.post(`/newComment/like`, { _id, idComentario });
        return respuesta.data ? true : false;
    } catch (error) {
        console.log(error.response.data.message);
        return false;
    }
};

export const removeNewLike = async (axios, _id, idNoticia) => {
    try {
        await axios.delete(`/new/like/`, {
            data: {
                _id, 
                idNoticia
            }
        });
        return true;
    } catch (error) {
        console.log(error.response.data.message);
        return false;
    }
};

export const removeNewLikeComment = async (axios, _id, idComentario) => {
    try {
        await axios.delete(`/newComment/like`, {
            data: {
                _id, 
                idComentario
            }
        });
        return true;
    } catch (error) {
        console.log(error.response.data.message);
        return false;
    }
};
