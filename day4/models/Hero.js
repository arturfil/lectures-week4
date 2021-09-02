const mongoose = require('mongoose');
const Villain = require('./Villain')

const HeroeSchema = mongoose.Schema(
  {
    name: {type: String, required: [true, 'The name is required'], unique: [true, 'The name most be unique']},
    superPowers: [],
    secretName: String,
    enemy: mongoose.Schema.Types.ObjectId,
    weakness: String,
    age: Number
  }
);

module.exports = mongoose.model('Heroe', HeroeSchema)
