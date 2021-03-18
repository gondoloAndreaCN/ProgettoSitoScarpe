const { Double } = require('mongodb');
const mongoose = require ('mongoose');

var schema = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },

    cognome: {
        type: String,
        required: true
    },

    indirizzo: {
        type: String,
        required: true
    },

    password: {
        type: Double,
        required: true
    }
});

// copia dello shcema
var Post = mongoose.model('Utenti', schema);
// esporto il modulo per usarlo nei controller
module.exports = Utenti;