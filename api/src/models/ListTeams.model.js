const { Schema, model } = require('mongoose');

const listTeamsSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model('ListTeam', listTeamsSchema);