const mongoose = require('mongoose');

const DoacaoSchema = new mongoose.Schema({
    quantidade: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    dataRetirada: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model('Doacao', DoacaoSchema);