const fetch = require("node-fetch");

const getShow = (id) => {
  return fetch(`https://api.tvmaze.com/shows/${id}/episodes`).then((res) =>
    res.json()
  );
};

const getDataShows = () =>
  fetch("https://api.tvmaze.com/shows").then((res) => res.json());

module.exports = { getDataShows, getShow };
