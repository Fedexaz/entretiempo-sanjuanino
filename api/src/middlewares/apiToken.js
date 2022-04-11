const Token = require('../models/TokenAPI.model');

const tokenAPIVerify = async (request, response, next) => {

    try {
        const token = await Token.findOne({ token : req.query.key });
        if (token?.isActive) {
            next();
        }
        else {
            res.status(401).json({ message: 'Token desactualizado o inexistente' });
        }
    } catch (error) {
        throw error;
    }

};

module.exports = tokenAPIVerify;