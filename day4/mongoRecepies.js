const mongoose = require("mongoose");
const Recipe = require("./models/Recipe");

mongoose
  .connect("mongodb://localhost:27107/recipes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to db...')
    return Recipe.create({ name: "Test", ingredients: ["dough", "salt"] });
  })
  .then(() => {
    mongoose.connection.close().then(() => console.log("Connection closed"));
  })
  .catch(erro => {
    console.log("Error");
  })
