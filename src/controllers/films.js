const getDataShows = require('./fetch');

const getShows = (req, res) => {
  getDataShows().then((data) => res.send(data)).catch((err) => console.log(err));
};

module.exports = getShows;
