const { response } = require("express");
const express = require("express");
const router = express.Router();

const Game = require("../../models/Game");

router.get("/:title", async (req, res) => {
  try {
    let game = await Game.findOne({ urlTitle: req.params.title }).select(
      "-urlTitle"
    );
    if (game) {
      res.json(game);
    }
  } catch (error) {}
});

router.get("/", async (req, res) => {
  let { search, stadia, geforce } = req.query;

  try {
    let result = await Game.aggregate([
      {
        $search: {
          autocomplete: {
            query: `${search}`,
            path: "title",
            fuzzy: {
              maxEdits: 2,
              prefixLength: 3,
            },
          },
        },
      },
      {
        $limit: 5, //A találatok limite
      },
      {
        $skip: 0, //Ahonnan kezdje, pl. kezdeben 0 azátn 10 aztán 20 ...
      },
    ]);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
