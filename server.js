const mongoose = require ("mongoose");
const app = require("./app.js");
const mongo = require("./connectionDB");

//fa partire mongo init dentro al connectionDb
mongo.init();

/* Definizione porta di accesso in locale */
const PORT = 8080 ;

//definisce la porta sul quale server prende richieste
//listen è metodo di express
app.listen(PORT, () => {
  console.log(
    `Scraping Scarpe | Server started on port ${PORT} - use 'localhost:${PORT}`
  );
});