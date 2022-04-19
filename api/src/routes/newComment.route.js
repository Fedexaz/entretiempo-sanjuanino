const { Router } = require('express');
const passport = require('passport');
const modVerify = require('../middlewares/modVerify');

const {
    getNewCommentsController,
    addNewCommentController,
    editNewCommentController,
    deleteNewCommentController,
    adminEditNewCommentController,
    adminDeleteNewCommentController,
 } = require('../controllers/newComment.controller');

const newCommentRoutes = Router();

newCommentRoutes.get('/comment/:newId', getNewCommentsController);
newCommentRoutes.post('/comment', passport.authenticate('jwt', { session: false }), addNewCommentController);
newCommentRoutes.put('/comment', passport.authenticate('jwt', { session: false }), editNewCommentController);
newCommentRoutes.delete('/comment', passport.authenticate('jwt', { session: false }), deleteNewCommentController);

newCommentRoutes.put('/admin/comment', passport.authenticate('jwt', { session: false }), modVerify, adminEditNewCommentController);
newCommentRoutes.delete('/admin/comment', passport.authenticate('jwt', { session: false }), modVerify, adminDeleteNewCommentController);

module.exports = newCommentRoutes;