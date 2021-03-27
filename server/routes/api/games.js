const express = require("express");
const router = express.Router();

const Game = require("../../models/Game");

router.get("/:title", async (req, res) => {
  const title = req.params.title;
  try {
    let game = await Game.findOne({ shortName: title });
    if (game) {
      res.json(game);
    } else {
      res.status(404).json("Game not found");
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
