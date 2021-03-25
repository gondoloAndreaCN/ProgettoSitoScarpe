// 04/03/2021 lsti things

const express = require('express');
const Scarpa = require('../models/Scarpa');

const app = express;

// prendo la pagina
exports.get = async (req, res) => {
    
    // create
    const dbScarpa = new Scarpa(nome, descrizione, linkFoto, numeroScarpa, prezzo, colore, sesso, linkSito);
    await dbScarpa.save();

    // prende un array di documenti nel caso non esistano
    // await Scarpe.insertMany()


    // read
    // ritorna un vettore contenente documenti che rispecchiano la query
    await Scarpa.find({ nome: "esempio nome", prezzo: { $gte: 10 }});
    //ritorna il pirmo documento che soddisfa la query
    await Scarpa.findOne({ nome: "esempio nome" });

    //da vedere: operatori di comparazione


    // update
    // prende il primo documento corrispondente e lo aggiorna,  ritorna il nuovo documento , con la upsert lo crea se non esiste
    const scarpa = await Scarpa.updateOne({ nome: "esempio nome" }, { nome: "esempio nome, ma più belle" }, { new: true, upsert: true });
    // prende documenti corrispondenti e li aggiorna,  ritorna il nuovo documento , con la upsert lo crea se non esiste
    const scarpa = await Scarpa.updateMany({ nome: "esempio nome" }, { nome: "esempio nome, ma più belle" }, { new: true, upsert: true });

    // delete
    Scarpa.deleteOne({ nome: "esempio nome" });

}
