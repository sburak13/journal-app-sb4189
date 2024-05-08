const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  date: String,
  content: String,
  emoji: String
});

module.exports = mongoose.model('Entry', entrySchema);
