//libreria per funzioni asincrone
const mongoose = require ('mongoose');

//struttura collezione
var schema = new mongoose.Schema({

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

//mette struttura in un oggetto scarpe e lo esporta
var Scarpe = mongoose.model('Scarpe', schema);
module.exports = Scarpe;