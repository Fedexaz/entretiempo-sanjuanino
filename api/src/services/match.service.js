const Match = require('../models/Match.model');

const getAllMatchesService = async (request) => {
    try {
        const matches = await Match.find();
        return matches;
    } catch (error) {
        throw error;
    }
};

const getMatchService = (user) => {

};

const addMatchService = async () => {

};

const editMatchService = async () => {

};

const deleteMatchService = async () => {

};

module.exports = {
    getAllMatchesService,
    getMatchService,
    addMatchService,
    editMatchService,
    deleteMatchService
}