const express = require('express');
const app = express();

// database

// middlewares
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// routes
app.get('/', (req, res) => {
  let data = {
    name: "Arturo",
    // lastName: "Filio",
    cities: ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo"],
    bootcamp: "Web Dev Iron Hack",
    address: {
      street: "The number of the beast",
      number: 666
    },
  }
  res.render("index.hbs", data)
})

// listen
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started listening...`);
})