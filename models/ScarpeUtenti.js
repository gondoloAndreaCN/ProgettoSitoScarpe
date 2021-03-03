const { Double } = require('mongodb');
const mongoose = require ('mongoose');

var schema = new mongoose.Schema({
    id: {
        type: String,
        //se obbligatorio o meno
        required: true
    },

    idScarpa: {
        type: String,
        required: true
    },

    idUtenti: {
        type: String,
        required: true
    }
});

// copia dello shcema
var ScarpeUtenti = mongoose.model('ScarpeUtenti', schema);
// esporto il modulo per usarlo nei controller
module.exports = ScarpeUtenti;