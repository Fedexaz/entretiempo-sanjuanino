export const getAllMatches = async (axios) => {
    try {
        let data = [];
        const res = await axios.get(`/api/match/all?key=${process.env.REACT_APP_TOKEN_API_ENTRETIEMPO ? process.env.REACT_APP_TOKEN_API_ENTRETIEMPO : 'fede'}`);
        data = res.data.data;
        return data;
    } catch (error) {
        console.log(error.response.message);
        return [];
    }
};

export const getMatch = async (axios, id) => {
    try {
        let data;
        const res = await axios.get(`/api/match/?id=${id}&key=${process.env.REACT_APP_TOKEN_API_ENTRETIEMPO ? process.env.REACT_APP_TOKEN_API_ENTRETIEMPO : 'fede'}`);
        data = res.data.data;
        return data;
    } catch (error) {
        console.log(error.response.message);
        return false;
    }
}