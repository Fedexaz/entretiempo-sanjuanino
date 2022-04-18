const { Schema, model } = require('mongoose');

const listCanchasSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model('ListCancha', listCanchasSchema);