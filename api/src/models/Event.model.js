const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    liga: {
        type: String,
        required: true
    },
    fechaInicio: Date,
    provincia: {
        type: String,
        required: true
    },
    departamento: {
        type: String,
        required: true 
    },
    equipos: Array,
    canchas: Array
});

module.exports = model("Team", eventSchema);