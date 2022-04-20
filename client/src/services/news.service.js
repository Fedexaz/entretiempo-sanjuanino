import axios from 'axios';

export const getNews = async () => {
    try {
        const respuesta = await axios.get('/new/all');
        return respuesta.data;
    } catch (error) {
        console.log(error.response.data.message);
        return [];
    }
};

export const getNew = async (id) => {
    try {
        const respuesta = await axios.get(`/new/?_id=${id}`);
        return respuesta.data;
    } catch (error) {
        console.log(error.response.data.message);
        return {};
    }
};

export const getNewComments = async (id) => {
    try {
        const respuesta = await axios.get(`/newComment/${id}`);
        return respuesta.data;
    } catch (error) {
        console.log(error.response.data.message);
        return [];
    }
};

export const addNewComment = async (id, comentario) => {
    try {
        const usuario = JSON.parse(localStorage.getItem('data')).userName;
        const token = localStorage.getItem('token');
        const respuesta = await axios.post(`/newComment/`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                data: {
                    comentario,
                    idNoticia: id,
                    usuario
                }
            }
        );
        return respuesta.data ? true : false;
    } catch (error) {
        console.log(error.response);
        return [];
    }
};
