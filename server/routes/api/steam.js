const express = require("express");
const router = express.Router();

const axios = require("axios");
const Game = require("../../models/Game");

//localhost:5000/api/steam/{steamID}
//@PUBLIC, GET request
//@description: sends back the users steam games if available

router.get("/:steamID", async (req, res) => {
  const steamID = req.params.steamID;
  let isnum = /^\d+$/.test(steamID);

  if (steamID.length == 17 && isnum) {
    const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=${steamID}&format=json&include_appinfo=true&include_played_free_games=true`;
    try {
      const response = await axios.get(url);

      console.log("steam info recived");

      const games = response.data.response.games;

      if (games) {
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
      } else {
        res.status(400).send("Steam ID not found");
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    res.status(400).send("Bad Request");
  }
});

module.exports = router;

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
