const express = require("express");
const router = express.Router();

const GameTitle = require("../../models/GameTitle");

//@route PUBLIC GET /api/lasts
//@description: sends the last 10 added game

router.get("/", async (req, res) => {
  try {
    let result = await GameTitle.find().sort({ _id: -1 }).limit(30);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
