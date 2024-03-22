const mongoose = require('mongoose');

const recetteSchema = new mongoose.Schema({
  libelle: {
    type: String,
    required: true
  }
});

const Recette = mongoose.model('Recette', recetteSchema);

module.exports = Recette;
