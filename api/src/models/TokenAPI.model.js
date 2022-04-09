const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');

const tokenSchema = new Schema({
    comprador: {
        type: String,
        unique: true,
        required: true
    },
    token:{
        type: String,
        required: true,
        unique: true
    },
    isActive:{
        type: String,
        required: true
    },
    fechaCompra:{
        type: String,
        required: true

    },
    fechaVencimiento:{
        type: String,
        required: true
    },
    tier:{
        type: String,
        required: true
    }
});

module.exports = model("TokenAPI", tokenSchema);