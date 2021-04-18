const geforce = require("./scripts/geforce");
const stadia = require("./scripts/stadia");
const { findCommonTitle, getPublishers, getStores } = require("./scripts/RAWG");

const express = require("express");
const router = express.Router();

const GameTitle = require("../../models/GameTitle");
const Game = require("../../models/Game");

router.patch("/", async (req, res) => {
  res.json("Updating games now...");
  update();
});

module.exports = router;

const update = async () => {
  let games = await geforce();
  let n = 0;
  for (const [key, value] of Object.entries(games)) {
    n++;
    if (n > 600) break;
    try {
      await checkGame(key, value, { geforce: true });
    } catch (error) {
      console.error(error);
    }
  }

  n = 0;
  games = await stadia();
  for (const [key, value] of Object.entries(games)) {
    n++;

    if (n > 400) break;
    try {
      await checkGame(key, value, { stadia: true });
    } catch (error) {
      console.error(error);
    }
  }

  console.log("all games are updated");
};

async function checkGame(key, value, obj) {
  let title = key;
  let game = await GameTitle.findOne({ shortTitle: title });

  if (game) {
    //update game
    if (obj.geforce) game = await updateGeforceGame(value, game);
    if (obj.stadia) game = await updateStadiaGame(game);

    console.log(`existing game found, update was not necessary`);
  } else {
    const common = await findCommonTitle(title); //find common title
    game = await GameTitle.findOne({ commonTitle: common.shortName });
    if (game) {
      //update current game
      if (obj.geforce) game = await updateGeforceGame(value, game);
      if (obj.stadia) game = await updateStadiaGame(game);
      console.log(`existing game found with common title`);
    } else {
      //create new game
      game = new GameTitle({
        shortTitle: title,
        fullGameTitle: common.name,
        commonTitle: common.shortName,
        imageURL: common.image,
      });
      await game.save();
      console.log(`new game title added`);

      if (obj.geforce) await addGeforceGame(value, common);
      if (obj.stadia) await addStadiaGame(common);
    }
  }
}

async function addStadiaGame(common) {
  {
    let temp = {
      shortName: common.shortName,
      name: common.name,
      stadia: true,
      tags: common.tags,
      genres: common.genres,
      publishers: await getPublishers(common.shortName),
      stores: await getStores(common.shortName),
    };

    newGame = new Game({
      shortName: temp.shortName,
      name: temp.name,
      stadia: temp.stadia,
      tags: temp.tags,
      genres: temp.genres,
      publishers: temp.publishers,
      stores: temp.stores,
      image: common.image,
    });
    await newGame.save();
    console.log("new game added to db");
  }
}

async function updateStadiaGame(game) {
  {
    let temp = await Game.findOne({ shortName: game.commonTitle });
    let oldSta = temp.stadia;
    if (!oldSta) {
      game = await Game.findOneAndUpdate(
        { shortName: game.commonTitle },
        {
          $set: {
            stadia: true,
          },
        }
      );
      console.log(`existing stadia game found and updated`);
    }
  }
  return game;
}

async function addGeforceGame(value, common) {
  let geforce = {
    steam: false,
    epic: false,
    gog: false,
    uplay: false,
    origin: false,
  };
  for (const store of value.stores) {
    switch (store) {
      case "Steam":
        geforce.steam = true;
        break;
      case "Epic":
        geforce.epic = true;
        break;
      case "UPLAY":
        geforce.uplay = true;
        break;
      case "GOG":
        geforce.gog = true;
        break;
      case "Origin":
        geforce.origin = true;
        break;
    }
  }

  let temp = {
    shortName: common.shortName,
    name: common.name,
    geforce: geforce,
    tags: common.tags,
    genres: common.genres,
    publishers: await getPublishers(common.shortName),
    stores: await getStores(common.shortName),
  };

  newGame = new Game({
    shortName: temp.shortName,
    name: temp.name,
    geforce: temp.geforce,
    tags: temp.tags,
    genres: temp.genres,
    publishers: temp.publishers,
    stores: temp.stores,
    image: common.image,
  });
  await newGame.save();
  console.log("new game added to db");
}

async function updateGeforceGame(value, game) {
  {
    let newGef = {
      steam: false,
      epic: false,
      gog: false,
      uplay: false,
      origin: false,
    };
    for (const store of value.stores) {
      switch (store) {
        case "Steam":
          newGef.steam = true;
          break;
        case "Epic":
          newGef.epic = true;
          break;
        case "UPLAY":
          newGef.uplay = true;
          break;
        case "GOG":
          newGef.gog = true;
          break;
        case "Origin":
          newGef.origin = true;
          break;
      }
    }
    let temp = await Game.findOne({ shortName: game.commonTitle });
    let oldGef = temp.geforce;
    if (JSON.stringify(oldGef) !== JSON.stringify(newGef)) {
      console.log(oldGef);
      console.log(newGef);
      game = await Game.findOneAndUpdate(
        { shortName: game.commonTitle },
        {
          $set: {
            geforce: newGef,
          },
        }
      );
      console.log(`existing gf game found and updated ${temp.shortName}`);
    }
  }
  return game;
}
