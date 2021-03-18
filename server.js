const mongoose = require ("mongoose");
const app = require("./app.js");

/* Definizione porta di accesso in locale */
const PORT = 8080 ;
app.listen(PORT, () => {
  console.log(
    `Scraping Scarpe | Server started on port ${PORT} - use 'localhost:${PORT}`
  );
});

// server richiede l'app.js
let db = require('./config/keys').MongoURI;
// si connette al db
mongoose.connect(db, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// riporta lo stato della connessione
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

/* Se la connessione è andata a buon fine loggiamo a console il messaggio */
db.on('open', () => {
  console.log('Scraping Scarpe | MongoDB Connected');
});