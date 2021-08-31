// imports
const express = require("express");
const app = express();

// database connection

// middlewares
app.use(express.static(__dirname));

// routes
// get, post, put, delete, patch => CRUD

// http
// index route

app.get("/", (req, res) => {
  console.log("Index route")
  res.sendFile(__dirname + "/index.html");
});

app.get("/games", (req, res) => {
  if (1 < 2) {
    console.log('test')
  }
  res.sendFile(__dirname + "/games.html");
});

app.get("/games/minecraft", (req, res) => {
  console.log('minecraft')
  res.send('<h2>MineCraft</h2>')
})

// run our app || app.listen();
app.listen(5000, () => {
  console.log("server sarted running...");
});
