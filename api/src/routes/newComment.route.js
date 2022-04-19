const { Router } = require('express');
const passport = require('passport');
const modVerify = require('../middlewares/modVerify');

const {
    getNewCommentsController,
    addNewCommentController,
    editNewCommentController,
    deleteNewCommentController
 } = require('../controllers/newComment.controller');

const newCommentRoutes = Router();

newCommentRoutes.get('/:newId', getNewCommentsController);
newCommentRoutes.post('/', passport.authenticate('jwt', { session: false }), addNewCommentController);
newCommentRoutes.put('/', passport.authenticate('jwt', { session: false }), editNewCommentController);
newCommentRoutes.delete('/', passport.authenticate('jwt', { session: false }), deleteNewCommentController);

newCommentRoutes.put('/admin', passport.authenticate('jwt', { session: false }), modVerify, editNewCommentController);
newCommentRoutes.delete('/admin', passport.authenticate('jwt', { session: false }), modVerify, deleteNewCommentController);

module.exports = newCommentRoutes;