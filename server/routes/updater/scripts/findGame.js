const axios = require("axios");
const dotenv = require("dotenv").config({ path: "./server/config/.env" });

const findGame = async (search) => {
  //console.log(search);
  const req1 =
    "https://api.rawg.io/api/games?search=" +
    search +
    "&key=" +
    process.env.RAWG_API_KEY +
    "&search_exact";

  const req2 =
    "https://api.rawg.io/api/games?search=" +
    search +
    "&key=" +
    process.env.RAWG_API_KEY;

  try {
    const response = await axios.get(encodeURI(req1));
    let game = await createGame(response);

    return game;
  } catch (err) {
    //console.error(err);
    const response = await axios.get(encodeURI(req2));
    let game = await createGame(response);

    return game;
  }
};

const getStores = async (shortName) => {
  const storesURL = `https://api.rawg.io/api/games/${shortName}/stores?key=${process.env.RAWG_API_KEY}`;

  const response = await axios.get(encodeURI(storesURL));
  const data = response.data.results;
  let stores = [];
  for (const store of data) {
    let obj = {
      storeId: store.store_id,
      url: store.url,
    };
    stores.push(obj);
  }
  return stores;
};

const getPublishers = async (shortName) => {
  const publishersURL = `https://api.rawg.io/api/games/${shortName}?key=${process.env.RAWG_API_KEY}`;

  const response = await axios.get(encodeURI(publishersURL));
  const data = response.data.publishers;
  let publishers = [];
  for (const publisher of data) {
    publishers.push(publisher.name);
  }
  return publishers;
};

module.exports = findGame;

async function createGame(response) {
  const data = response.data.results[0];
  const genresRaw = response.data.results[0].genres;
  genres = [];
  for (const genre of genresRaw) {
    genres.push(genre.name);
  }
  const tagsRaw = response.data.results[0].tags;
  tags = [];
  if (tagsRaw !== null) {
    for (const tag of tagsRaw) {
      tags.push(tag.name);
    }
  }
  let game = {
    shortName: data.slug,
    name: data.name,
    image: data.background_image,
    tags: tags,
    genres: genres,
    publishers: await getPublishers(data.slug),
    stores: await getStores(data.slug),
  };
  return game;
}
