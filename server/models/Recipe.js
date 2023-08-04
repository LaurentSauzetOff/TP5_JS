const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Ce champ est requis.'
  },
  description: {
    type: String,
    required: 'Ce champ est requis.'
  },
  email: {
    type: String,
    required: 'Ce champ est requis.'
  },
  ingredients: {
    type: Array,
    required: 'Ce champ est requis.'
  },
  category: {
    type: String,
    enum: ['Thai', 'Américain', 'Chinois', 'Mexicain', 'Indien'],
    required: 'Ce champ est requis.'
  },
  image: {
    type: String,
    required: 'Ce champ est requis.'
  },
});

recipeSchema.index({ name: 'text', description: 'text' });
// WildCard Indexing
//recipeSchema.index({ "$**" : 'text' });

module.exports = mongoose.model('Recipe', recipeSchema);