const { getShow } = require("./fetch");

const getSpecificShow = (req, res) => {
  const actorID = req.params.id;
  getShow(actorID)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};

module.exports = getSpecificShow;
