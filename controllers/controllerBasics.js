// export, permette di chiamare la funzione al di fuori del file
//req la richiesta res è risposta
//richiamano la pagina dentro alla nostra views (con home e catalogo)
exports.get_home  = (req, res) => {
    // restituisce la pagina indicata
    res.status(200).render("./home");
}

exports.get_catalogo  = (req, res) => {
    // res.status(200).render("./bisarca");
    //mi renderizza la pagina catalogo
    res.status(200).render("./catalogo");
}