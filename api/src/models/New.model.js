const { Schema, model } = require('mongoose');

const newSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    hechaPor: {
        type: String,
        required: true
    },
    likes: Array,
    createdAt: Date
});

module.exports = model('New', newSchema);