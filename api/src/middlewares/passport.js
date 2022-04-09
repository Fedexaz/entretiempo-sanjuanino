const dotenv = require('dotenv');
const passport = require('passport');
const { ExtractJwt, Strategy, StrategyOptions } = require('passport-jwt');
const User = require('../models/User.model');

dotenv.config();

const optStrategy = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

const estrategia =  new Strategy(optStrategy, async (payload, done) => {
    try {
        const user = await User.findById(payload.id);
        if (user) { return done(null, user) }
        return done(null, false);
    } catch (error) {
        done(null, false)
    }
});

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = estrategia;