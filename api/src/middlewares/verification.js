const User = require('../models/User.model');

const verifyEmail = async (request, response, next) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        if (user?.isVerified) {
            next()
        }
        else {
            res.status(401).json({status: 'failed', errors: {message: 'Email no verificado'}})
        }
    } catch (error) {
        throw error
    }

};

module.exports = verifyEmail;