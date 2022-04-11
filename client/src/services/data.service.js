import axios from 'axios';

const getAllMatchesService = async () => {
    try {
        let data = [];
        const res = await axios.get(`/api/match/all?key=${process.env.REACT_APP_TOKEN_API_ENTRETIEMPO ? process.env.REACT_APP_TOKEN_API_ENTRETIEMPO : 'fede'}`);
        data = res.data.data;
        return data;
    } catch (error) {
        console.log(error.response.message);
    }
};

export const getAllMatches = getAllMatchesService()