const express = require("express");
const router = express.Router();
const fs = require("fs");

const geforce = require("./scripts/geforce");
const stadia = require("./scripts/stadia");

const findGame = require("./scripts/findGame");

router.patch("/", async (req, res) => {
  res.json("Updating data...");
  const gef = await geforce();
  const sta = await stadia();

  console.log("Data scraped seccessfully");

  let allGames = new Map();

  let n = 0;

  for (const game of gef) {
    n++;
    const found = await findGame(game.title);
    await sleep(200); //TODO DELETE IN PRODUCT
    found.geforce = {
      steam: false,
      epic: false,
      gog: false,
      uplay: false,
    };
    found.stadia = false;

    for (const store of game.stores) {
      switch (store) {
        case "Steam":
          found.geforce.steam = true;
          break;
        case "Epic":
          found.geforce.epic = true;
          break;
        case "UPLAY":
          found.geforce.uplay = true;
          break;
        case "GOG":
          found.geforce.gog = true;
          break;
      }
    }

    //console.log(found);
    allGames.set(found.shortName, found);

    if (n > 60) {
      break;
    }
  }

  console.log("geforce ready");

  //console.log(allGames);

  //   allGames.set("cyberpunk-2077", {});
  //   allGames.get("cyberpunk-2077").geforce = {
  //     steam: false,
  //     epic: false,
  //     gog: false,
  //     uplay: false,
  //   };
  //   allGames.get("cyberpunk-2077").stadia = false;

  n = 0;
  for (const game of sta) {
    n++;
    const found = await findGame(game.title);
    await sleep(200); //TODO DELETE IN PRODUCT
    if (allGames.has(found.shortName)) {
      allGames.get(found.shortName).stadia = true;
    } else {
      found.geforce = {
        steam: false,
        epic: false,
        gog: false,
        uplay: false,
      };
      found.stadia = true;
      allGames.set(found.shortName, found);
    }
    if (n > 10) {
      break;
    }
  }

  console.log("stadia ready");

  let merged = [];
  for (const [key, value] of allGames) {
    merged.push(value);
  }
  data = JSON.stringify(merged);
  fs.writeFile("./server/data/merged.json", data, function (err) {
    if (err) {
      console.log(err);
    }
  });

  console.log("data merged seccessfully");
});

module.exports = router;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
