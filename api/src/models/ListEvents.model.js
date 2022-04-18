const { Schema, model } = require('mongoose');

const listEventSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model('ListEvent', listEventSchema);