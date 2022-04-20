const { Router } = require("express");
const passport = require("passport");
const { handleRefreshToken, clearRefreshToken, protectedRoute } = require("../controllers/refreshToken.controller");

const router = Router();

router.get('/', handleRefreshToken);
router.get('/clear', clearRefreshToken);
router.post('/protected', passport.authenticate('jwt', {session: false}), protectedRoute);

module.exports = router;