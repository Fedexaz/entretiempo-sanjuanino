const { Router } = require('express');
const passport = require('passport');
const modVerify = require('../middlewares/modVerify');

const {
    getNewCommentsController,
    addNewCommentController,
    editNewCommentController,
    deleteNewCommentController,
    addLikeNewCommentController,
    removeLikeNewCommentController,
} = require('../controllers/newComment.controller');

const newCommentRoutes = Router();

newCommentRoutes.get('/:newId', getNewCommentsController);
newCommentRoutes.post('/', passport.authenticate('jwt', { session: false }), addNewCommentController);
newCommentRoutes.put('/', passport.authenticate('jwt', { session: false }), editNewCommentController);
newCommentRoutes.delete('/', passport.authenticate('jwt', { session: false }), deleteNewCommentController);

newCommentRoutes.put('/admin', passport.authenticate('jwt', { session: false }), modVerify, editNewCommentController);
newCommentRoutes.delete('/admin', passport.authenticate('jwt', { session: false }), modVerify, deleteNewCommentController);

newCommentRoutes.post('/like', passport.authenticate('jwt', { session: false }), addLikeNewCommentController);
newCommentRoutes.delete('/like', passport.authenticate('jwt', { session: false }), removeLikeNewCommentController);

module.exports = newCommentRoutes;