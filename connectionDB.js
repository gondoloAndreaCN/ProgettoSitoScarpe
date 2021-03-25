const mongoose = require("mongoose");

module.exports = {
    options: { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true, family: 4 },
    init() { 
        mongoose.connect(`mongodb+srv://${process.env.USERNAME_MONGO}:${process.env.PASSWORD_MONGO}@cluster0.bdrx0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, this.options); 
        mongoose.connection.on("connected", () => console.log("Scraping Scarpe | Database connected"));
        mongoose.connection.on("disconnected", () => console.log("Scraping Scarpe | Database disconnected"));
        mongoose.connection.on("err", err => console.log(`Scraping Scarpe | Database error: ${err.stack}`));
    }
}