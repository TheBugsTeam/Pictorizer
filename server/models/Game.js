const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  shortName: {
    type: String,
    unique: true,
  },
  name: {
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
  luna: {
    type: Boolean,
  },
  vortex: {
    steam: Boolean,
    epic: Boolean,
    gog: Boolean,
    uplay: Boolean,
  },
  image: String,
  rawgURL: String,
  tags: [String],
  genres: [String],
  publishers: [String],
  stores: [
    {
      storeId: String,
      url: String,
    },
  ],
});

module.exports = Game = mongoose.model("Game", GameSchema);
