const mongoose = require('mongoose');
//TODO change the name of the file for better understanding on the model
var Pokemon = mongoose.model('Pokemon', {
  name: {
    type: String,
    trim: true
  },
  type: {
    type: String
  },
  count: {
    type: Number
  }
});

module.exports = {
  Pokemon
}
