const express = require("express");
const router = express.Router();

const GameTitle = require("../../../models/GameTitle");

router.post("/", async (req, res) => {
  const searchTerm = req.body.searchTerm;
  if (searchTerm) {
    try {
      let result = await GameTitle.aggregate([
        {
          $search: {
            autocomplete: {
              query: `${searchTerm}`,
              path: "fullGameTitle",
              fuzzy: {
                maxEdits: 2,
                prefixLength: 3,
              },
            },
          },
        },
        {
          $limit: 4, //A találatok limite
        },
        {
          $skip: 0, //Ahonnan kezdje, pl. kezdeben 0 azátn 10 aztán 20 ...
        },
      ]);
      res.send(result);
    } catch (error) {
      console.error(error);
    }
  }
});

module.exports = router;
