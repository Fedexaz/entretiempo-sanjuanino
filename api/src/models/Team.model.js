const { Schema, model } = require('mongoose');

const teamSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    siglas: {
        type: String,
        required: true
    },
    fundado: {
        type: Date
    },
    escudo: {
        type: String,
        required: true
    },
    provincia: {
        type: String,
        required: true
    },
    departamento: {
        type: String,
        required: true 
    },
    cancha: {
        type: String,
        required: true
    },
    jugadores: {
        type: Array
    },
    suplentes: {
        type: Array
    }
});

module.exports = model("Team", teamSchema);