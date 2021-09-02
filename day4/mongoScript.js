const mongoose = require("mongoose");
const mongo = require('mongodb').MongoClient
const Hero = require("./models/Hero");
const Villain = require("./models/Villain");

mongo
  .connect("mongodb://localhost/dcuniverse")
  .then(() => console.log('Connected to db...', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }))
  .catch((err) => console.log(err));

Hero.create({
  name: 'Batman',
  superPowers: ['filanthropist', 'rich', 'genious', 'playboy'],
  secretName: 'Bruce Wayne',
  weakness: 'Any overpowered being',
  age: 42
})
  .then(result => console.log(`hero added: ${result}`))
  .catch(err => console.log(err))

mongoose.connection
  .close()
  .then(() => console.log("Connection closed successfully"));

