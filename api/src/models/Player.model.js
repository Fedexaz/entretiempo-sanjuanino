const { Schema, model } = require('mongoose');

const playerSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apodo: String,
    edad: String,
    foto: String,
    altura: Number,
    peso: Number,
    pierna: String,
    posicion: {
        type: String,
        required: true
    }
});

module.exports = model("Player", playerSchema);