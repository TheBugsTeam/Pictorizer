const axios = require("axios");

const fs = require("fs");

const { format } = require("./formater");

class Game {
  constructor(title, store) {
    this.title = title;
    this.stores = [];
    this.new = true;
    if (store != "") {
      this.stores.push(store);
    }
  }
}

const geforceUpdate = async () => {
  const url =
    "https://static.nvidiagrid.net/supported-public-game-list/locales/gfnpc-en-GB.json";

  let gamesSet = new Set();
  const games = [];
  try {
    const response = await axios.get(url);
    const str = response.data;

    Object.entries(str).forEach(([key, value]) => {
      let title = format(value["title"]);
      if (!title.includes("-demo")) {
        let store = value["store"];
        if (!gamesSet.has(title)) {
          gamesSet.add(title);
          let temp = new Game(title, store);
          games.push(temp);
        } else {
          if (store != "") {
            for (let i = 0; i < games.length; i++) {
              if (games[i].title == title) {
                games[i].stores.push(store);
                break;
              }
            }
          }
        }
      }
    });

    let gameObjs = {};
    for (const game of games) {
      let obj = {
        [game.title]: {
          stores: game.stores,
          new: game.new,
        },
      };
      //console.log(obj);
      Object.assign(gameObjs, obj);
    }

    return gameObjs;

    const data = JSON.stringify(gameObjs);
    fs.writeFile("./server/data/geforce.json", data, function (err) {
      if (err) {
        console.log(err);
      }
    });
    console.log("geforcenow ready");
  } catch (error) {
    console.log(error);
  }
};

module.exports = geforceUpdate;
