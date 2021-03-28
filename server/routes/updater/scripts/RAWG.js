const axios = require("axios");

const findCommonTitle = async (search) => {
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
    return getGameDetails(response);
  } catch (error) {
    //console.error(error);
    const response = await axios.get(encodeURI(req2));
    return getGameDetails(response);
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

module.exports = {
  findCommonTitle,
  getPublishers,
  getStores,
};

const getGameDetails = (response) => {
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
      if (!/^[\u0400-\u04FF ]+$/.test(tag.name)) tags.push(tag.name);
    }
  }
  let game = {
    shortName: data.slug,
    name: data.name,
    image: data.background_image,
    tags: tags,
    genres: genres,
    geforce: {
      steam: false,
      epic: false,
      gog: false,
      uplay: false,
      origin: false,
    },
    stadia: false,
    luna: false,
    vortex: {
      steam: false,
      epic: false,
      gog: false,
      uplay: false,
      origin: false,
    },
  };
  return game;
};
