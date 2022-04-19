import axios from 'axios';

const getCommentsNews = async (newID) => {
    try {
        const respuesta = await axios.get(`/newComment/${newID}`);
        return respuesta;
    } catch (error) {
        console.log(error.response.message);
    }
};
