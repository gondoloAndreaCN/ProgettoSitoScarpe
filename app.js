require("dotenv").config();
const routerBasic = require("./routes/routerBasics");

// richiedo express
const express = require("express");

// richiedo morgan
const morgan = require("morgan");

//eseguo express
const app = express();
const PORT = 8080;

// eseguito ad ogni richiesta (middleware) | dev = metodo di visualizzazione
app.use(morgan("dev"));
//richiesta e risposta
// app.use((req, res) => {
//     console.log("nuova richiesta")
//     res.send("connesso");
// })

// specifica il motore da utilizzare
app.set('view engine', 'ejs');

app.use("/", routerBasic);

//esporta il modulo app per usarle in server.js
module.exports = app;