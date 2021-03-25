require("dotenv").config();
const routerBasic = require("./routes/routerBasics");

// richiedo express
const express = require("express");

// richiedo morgan
const morgan = require("morgan");

//eseguo express
const app = express();
const PORT = 8080;

/* permette di usare la cartella public */
app.use(express.static(__dirname + '/public'));

// eseguito ad ogni richiesta (middleware) | dev = metodo di visualizzazione
app.use(morgan("dev"));
//richiesta e risposta
// app.use((req, res) => {
//     console.log("nuova richiesta")
//     res.send("connesso");
// })

/* Impostazione del motore di rendering:
    - non è quindi necessario specificare l'estensione dei file nel 'res.render('nomefile')' */
app.set('view engine', 'ejs');

/* Impostazione dei router */
app.use("/", routerBasic);

/* Esportazione modulo app per l'utilizzo in server.js */
module.exports = app;