const express = require("express");
const router = express.Router();
const fs = require("fs");

const geforce = require("./scripts/geforce");
const stadia = require("./scripts/stadia");
const findGame = require("./scripts/findGame");

const oldGeforce = require("../../data/old/geforce.json");
const oldStadia = require("../../data/old/stadia.json");

const database = require("../../data/merged.json");

router.patch("/", async (req, res) => {
  res.json("Updating data...");

  const newGeforce = await geforce();
  const newStadia = await stadia();

  console.log("Data scraped successfully");

  //FIXME ??? nem tolti be ujra a fajlt ???

  let allGames = new Map();
  for (const [key, value] of Object.entries(database)) {
    allGames.set(key, value);
  }

  //geforce cimek hozzaadasa ha van uj
  const gef = Object.keys(oldGeforce); //régi címek

  let n = 0;

  for (const [key, value] of Object.entries(newGeforce)) {
    n++;
    if (n > 50) break;

    if (!gef.includes(key)) {
      //ha még nem tartalmazza a map (tehát a régiek)
      const found = await initializeGame(key);
      for (const store of newGeforce[key].stores) {
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
          case "Origin":
            found.geforce.origin = true;
            break;
        }
      }
      allGames.set(found.shortName, found);
      console.log("game added");
    }
  }
  //console.log(allGames);
  let data = JSON.stringify(newGeforce);
  fs.writeFile("./server/data/old/geforce.json", data, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("geforce now synced");

  //stadia cimek hozzaadasa ha van uj
  n = 0;
  const sta = Object.keys(oldStadia); //régi címek
  for (const [key, value] of Object.entries(newStadia)) {
    n++;
    if (n > 50) break;

    if (!sta.includes(key)) {
      //ha még nem tartalmazza a map (tehát a régiek)
      const found = await initializeGame(key);
      found.stadia = true;
      allGames.set(found.shortName, found);
      console.log("game added");
    }
  }
  data = JSON.stringify(newStadia);
  fs.writeFile("./server/data/old/stadia.json", data, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("stadia now synced");

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

  console.log("data merged successfully");
});

module.exports = router;

async function initializeGame(game) {
  const found = await findGame(game);
  await sleep(200); //TODO DELETE IN PRODUCT
  found.geforce = {
    steam: false,
    epic: false,
    gog: false,
    uplay: false,
    origin: false,
  };
  found.stadia = false;
  found.vortex = {
    steam: false,
    epic: false,
    gog: false,
    uplay: false,
    origin: false,
  };
  found.luna = false;

  return found;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
