const mongoose = require('mongoose');

const DoadoraSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    cpf: {
        type: Number,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Doadora', DoadoraSchema);
