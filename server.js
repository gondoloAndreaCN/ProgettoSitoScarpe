const mongoose = require ("mongoose");
const app = require("./app.js");
const mongo = require("./connectionDB");

mongo.init();

/* Definizione porta di accesso in locale */
const PORT = 8080 ;
app.listen(PORT, () => {
  console.log(
    `Scraping Scarpe | Server started on port ${PORT} - use 'localhost:${PORT}`
  );
});