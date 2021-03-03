const mongoose = require ('mongoose');

var schema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },

    nome: {
        type: String,
        required: true
    },

    descrizione: {
        type: String,
        required: true
    },

    linkFoto: {
        type: String,
        required: true
    },

    numeroScarpa: {
        type: Double,
        required: true
    },

    prezzo: {
        type: Double,
        required: true
    },

    colore: {
        type: String,
        required: true
    },

    sesso: {
        type: String,
        required: true
    },

    linkSito: {
        type: String,
        required: true
    }
});

var Scarpe = mongoose.model('Scarpe', schema);
module.exports = Scarpe;