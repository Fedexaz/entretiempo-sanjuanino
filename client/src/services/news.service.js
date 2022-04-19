import axios from 'axios';

const getNews = async () => {
    try {
        const respuesta = await axios.get('/new/news');
        return respuesta;
    } catch (error) {
        console.log(error.response.message);
    }
};