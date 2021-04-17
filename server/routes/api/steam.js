const express = require("express");
const router = express.Router();

const axios = require("axios");
const Game = require("../../models/Game");

//localhost:5000/api/steam/{steamID}
//@PUBLIC, GET request

router.get("/:steamID", async (req, res) => {
  const steamID = req.params.steamID;
  const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=${steamID}&format=json&include_appinfo=true&include_played_free_games=true`;
  try {
    const response = await axios.get(url);

    console.log("steam info recived");
    const userData = response.data;

    const games = response.data.response.games;
    let allFound = [];
    let i = 0;
    let database = await Game.find();

    for (const game of games) {
      let gameName = game.name;
      let result = database.find(({ name }) => name === gameName);
      if (result) {
        i++;
        allFound.push(result);
      }
    }
    console.log(`${i} games found. for ${steamID}`);
    res.json(allFound);

    // Lassulas eseten mar majd lehet jobban megri igy:
    // for (const game of games) {
    //   let gameName = game.name;
    //   let find = await Game.findOne({ name: gameName });

    //   //console.log(game);
    //   if (find) {
    //     allFound.push(find);
    //     i++;
    //     //console.log(find.name);
    //   }
    // }
    // ;
    // //console.log(allFound);
    // res.send(allFound);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
