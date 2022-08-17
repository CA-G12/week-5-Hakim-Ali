const fetch = require('node-fetch');

const getDataShows = () => fetch('https://api.tvmaze.com/shows')
  .then((res) => res.json());

module.exports = getDataShows;
