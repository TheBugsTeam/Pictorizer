const puppeteer = require("puppeteer");

//Collects the information from stadia's website
async function collectData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://vortex.gg/games");

  const games = await page.$$eval(
    "div.item-title",
    (inputs) => {
      return inputs.map((input) => input.value);
    }

    //temp.map((game) => game.innerText)
  );

  for (const [key, value] of Object.entries(games)) {
    //console.log(value);
    console.log(value);
  }
  let uniqueItems = [...new Set(games)];

  await browser.close();

  //console.log(uniqueItems);
  return uniqueItems;
}

//sends the data every x hour to DB
async function sendData() {
  const data = await collectData();
  console.log(data);
}

module.exports = {
  collectData,
  sendData,
};
