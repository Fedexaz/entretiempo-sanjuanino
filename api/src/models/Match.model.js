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
    departamento: {
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
        default: 'A convenir'
    }
});

module.exports = model('match', matchSchema);