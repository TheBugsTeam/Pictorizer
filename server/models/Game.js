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
    steam: {
      type: Boolean,
      default: null,
    },
    epic: {
      type: Boolean,
      default: null,
    },
    gog: {
      type: Boolean,
      default: null,
    },
    uplay: {
      type: Boolean,
      default: null,
    },
    origin: {
      type: Boolean,
      default: null,
    },
  },
  stadia: {
    type: Boolean,
    default: null,
  },
  luna: {
    type: Boolean,
    default: null,
  },
  vortex: {
    steam: {
      type: Boolean,
      default: null,
    },
    epic: {
      type: Boolean,
      default: null,
    },
    gog: {
      type: Boolean,
      default: null,
    },
    uplay: {
      type: Boolean,
      default: null,
    },
    origin: {
      type: Boolean,
      default: null,
    },
  },
  image: String,
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
