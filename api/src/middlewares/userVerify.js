const User = require('../models/User.model');

const modVerify = async (request, response, next) => {
    try {
        const user = await User.findOne({ email: request.body.id });
        if (user?._id == request?.user?._id) {
            next();
        }
        else {
            response.status(401).json({ message: 'No autorizado' });
        }
    } catch (error) {
        throw error;
    }
};

module.exports = modVerify;