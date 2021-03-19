const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  urlTitle: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    unique: true,
  },
  geforce: {
    steam: Boolean,
    epic: Boolean,
    gog: Boolean,
    uplay: Boolean,
  },
  stadia: {
    type: Boolean,
  },
  indexImage: String,
  rawgURL: String,
});

module.exports = Game = mongoose.model("Game", GameSchema);
