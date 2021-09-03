const { Schema, model } = require('mongoose');

const VillainSchema = Schema(
  {
    name: String,
    weakness: String,
    heroEnemy: {type: Schema.Types.ObjectId, ref: 'Heroe'},
    alive: {type: Boolean, default: true}
  }
)

module.exports = model('Villain', VillainSchema);