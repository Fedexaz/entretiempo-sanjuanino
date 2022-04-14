const { Schema, model } = require('mongoose');

const matchSchema = new Schema({
    teamLocal: {
        type: String,
        required: true
    },
    teamVisitante: {
        type: String,
        required: true
    },
    info: {
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
    jugado: {
        type: Boolean,
        required: true,
        default: false
    },
    fechaJuego: {
        type: String,
        required: true,
        default: new Date()
    },
    golesLocal: {
        type: Number,
        required: true
    },
    golesVisitante: {
        type: Number,
        required: true
    },
    evento: {
        type: String,
        required: true
    },
    creadoPor: {
        type: String,
        required: true
    }
});

module.exports = model('Match', matchSchema);