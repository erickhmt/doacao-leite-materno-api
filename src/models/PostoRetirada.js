const mongoose = require('mongoose');

const DoadoraSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    telefone: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Doadora', DoadoraSchema);
