const User = require('../models/User.model');

const adminVerify = async (request, response, next) => {
    try {
        const user = await User.findOne({ email: req.body.id });
        if (user?.rol === 3) {
            next()
        }
        else {
            res.status(401).json({status: 'failed', errors: {message: 'No autorizado'}})
        }
    } catch (error) {
        throw error
    }
};

module.exports = adminVerify;