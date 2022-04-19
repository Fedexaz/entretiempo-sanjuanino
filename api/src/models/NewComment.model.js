const { Schema, model } = require('mongoose');

const newCommentSchema = new Schema({
    idUsuario: {
        type: String,
        required: true
    },
    comentario: {
        type: String,
        required: true
    },
    likes: Array,
    fecha: Date,
    updatedAt: Date
});

module.exports = model('New', newSchema);