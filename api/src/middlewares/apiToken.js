const Token = require('../models/TokenAPI.model');

const tokenAPIVerify = async (request, response, next) => {

    try {
        const token = await Token.findOne({ token : request.query.key });
        if (token?.isActive) {
            next();
        }
        else {
            response.status(401).json({ message: 'Token desactualizado o inexistente' });
        }
    } catch (error) {
        throw error;
    }

};

module.exports = tokenAPIVerify;