//libreria express 
const express = require("express");

//variabile dove importiamo le funzioni dentro a co ntrollerBasics
const controllerBasic = require("../controllers/controllerBasics");
//per controllare il percorso dell'url
const router = express.Router();

// quando entro in router basic controlla con cosa matchare
//controlla l'url e vede cosa c'è scritto e in base a quello fa diverse operazioni
router.route("/")
    .get(controllerBasic.get_home);
router.route("/catalogo")
    .get(controllerBasic.get_catalogo);


// // sottopagina del catalogo
// app.get("/catalogo/:scarpa", (req, res) => {
//     const { scarpa } = req.params;
//     res.send(`scarpa ${ scarpa } nel catalogo`);
//     console.log(`scarpa ${ scarpa } nel catalogo`);
// })



//per poterci lavorare da un'altra pagina come abbiamo fatto con controllerBasics
module.exports = router;
