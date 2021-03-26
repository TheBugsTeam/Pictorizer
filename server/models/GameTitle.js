const mongoose = require("mongoose");

const GameTitleSchema = new mongoose.Schema({
  shortTitle: {
    type: String,
  }, //ami alapján a szolgáltató tárolja
  fullGameTitle: {
    type: String,
  }, //hivatalos játékcím
  commonTitle: {
    type: String,
  }, //a közös cím, ezt mentjük el a fullGameTitle-el együtt
  imageURL: {
    type: String,
  },
});

module.exports = GameTitle = mongoose.model("GameTitle", GameTitleSchema);
