const express = require("express");
const router = express.Router();

const GameTitle = require("../../models/GameTitle");

//@route PUBLIC GET /api/samples
//@description: sends 10 random game to the client

router.get("/", async (req, res) => {
  try {
    let result = await GameTitle.aggregate([{ $sample: { size: 10 } }]);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
