const { Router } = require("express");
const express = require("express");
// const { route } = require("../app");
const controllerBasic = require("../controllers/controllerBasics");
const router = express.Router();

// quando entro in router basic controlla con cosa matchare
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

module.exports = router;
