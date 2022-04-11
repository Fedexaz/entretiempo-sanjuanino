const {
    getAllMatchesService,
    getMatchService,
    addMatchService,
    editMatchService,
    deleteMatchService,
} = require('../services/match.service');

const getAllMatchesController = async (request, response) => {
    try {
        let matches = [];

        matches = await getAllMatchesController();
        
        if(matches.length){
            return response.status(200).json({ data: matches });
        }
        else {
            return response.status(404).json({ message: 'No hay partidos en la base de datos!' });
        }
    } catch (error) {
        throw Error(error);
    }
};

const getMatchController = async (request, response) => {

};

const addMatchController = async (request, response) => {

};

const editMatchController = async (request, response) => {

};

const deleteMatchController = async (request, response) => {

};

module.exports = {
    getAllMatchesController,
    getMatchController,
    addMatchController,
    editMatchController,
    deleteMatchController
}