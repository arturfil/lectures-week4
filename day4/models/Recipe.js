const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  name: String,
  ingredients: []
});

module.exports = mongoose.model("Recipe", RecipeSchema);