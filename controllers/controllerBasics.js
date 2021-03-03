// export, permette di usare la funzione al di fuori del file
exports.get_home  = (req, res) => {
    // restituisce la pagina indicata
    res.status(200).render("./esempio");
}

exports.get_catalogo  = (req, res) => {
    // res.status(200).render("./bisarca");
    console.log("funziona");
}