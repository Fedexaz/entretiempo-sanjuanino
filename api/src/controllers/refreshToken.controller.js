const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const handleRefreshToken = async (req, res) => {
    try {
        const cookies = req.cookies;

        if(!cookies?.refreshToken) return res.status(400).send({ message: `Missing refresh token` });

        const refreshToken = cookies.refreshToken;

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if(err) return res.status(400).send({ message: `Invalid refresh token` });
            const token = jwt.sign({ id: user._id, email: user.email, userName: user.userName, rol: user.rol, profilePic: user.profilePic, team: user.team }, process.env.JWT_SECRET, {
                expiresIn: '15m'
            });
            console.log('handleRefreshToken: token', token);
            return res.status(200).send(token);
        });
    } catch (e) {
        return res.status(403).json({ message: e});
    }
}

const clearRefreshToken = async (req, res) => {
    try {
        const cookies = req.cookies;

        if(!cookies?.refreshToken) return res.status(200).send({status: 'success'});

        res.clearCookie('refreshToken', { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });

        return res.status(200).send({status: 'success'});
    } catch (e) {
        return res.status(e.status || 400).json({ message: e.message || e });
    }
}

const protectedRoute =async (req, res) => {
    try {
        res.send({ message: 'You are authenticated' + ' data: ' + req.body.data }); 
    } catch (e) {
        return res.status(e.status || 400).json({ message: e.message || e });
    }
}

module.exports = {
    handleRefreshToken,
    clearRefreshToken,
    protectedRoute
}