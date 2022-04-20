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
        console.log(respuesta);
        return respuesta.data ? true : false;
    } catch (error) {
        console.log(error.response);
        return [];
    }
};
