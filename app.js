//per utilizzare le variabili d'ambiente 
require("dotenv").config();
const routerBasic = require("./routes/routerBasics");

// richiedo express
const express = require("express");

// richiedo morgan
const morgan = require("morgan");

//eseguo express
//uso i metodi di express sull'app
const app = express();
const PORT = 8080;

/* permette di usare la cartella public */
//express.static per gestire file statici come css e immagini
app.use(express.static(__dirname + '/public'));

// eseguito ad ogni richiesta (middleware) | dev = metodo di visualizzazione
//ad ogni aggiornamento mi stampa su terminale le richieste e il tempo impiegato
app.use(morgan("dev"));
//richiesta e risposta
// app.use((req, res) => {
//     console.log("nuova richiesta")
//     res.send("connesso");
// })

/* Impostazione del motore di rendering:
    - non è quindi necessario specificare l'estensione dei file nel 'res.render('nomefile')' */
//per non mettere tutte le volte l'estensione
app.set('view engine', 'ejs');

/* Impostazione dei router */
//per gestire gli indirizzi
//richiama routerBasics
app.use("/", routerBasic);

/* Esportazione modulo app per l'utilizzo in server.js */
module.exports = app;