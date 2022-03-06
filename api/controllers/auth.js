
const checkAuthenticatedAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.rango === 'ADMIN') { return next() }
    res.redirect("/")
}

const checkAuthenticatedUser = (req, res, next) => {
    if (req.isAuthenticated() && req.user.rango === 'USUARIO') { return next() }
    res.redirect("/")
}

module.exports = {
    checkAuthenticatedAdmin,
    checkAuthenticatedUser
}