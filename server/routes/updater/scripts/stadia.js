const puppeteer = require("puppeteer");
const fs = require("fs");

const { format } = require("./formater");

const stadiaUpdate = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://stadia.google.com/games");
  let games = await page.$$eval("div.s3O40", (temp) =>
    temp.map((game) => game.textContent)
  );

  let uniqueItems = new Set();
  for await (const temp of games) {
    uniqueItems.add(format(temp));
  }

  games = [];
  for await (const temp of uniqueItems) {
    games.push(temp);
  }
  await browser.close();

  games.sort();

  const last = games[games.length - 1];
  let str = "{";
  for (let item of games) {
    if (item != last) {
      str += '"' + item + '":{"new": true},';
    } else {
      str += '"' + item + '":{"new": true}';
    }
  }
  str += "}";

  return JSON.parse(str);

  fs.writeFile("./server/data/stadia.json", str, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("stadia ready");
  return JSON.parse(str);
};

module.exports = stadiaUpdate;
