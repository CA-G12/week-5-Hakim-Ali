const express = require('express');
const getShows = require('./controllers/films');
const getSpecificShow = require('./controllers/specificShow');

const router = express.Router();

router.get('/shows/:id/episodes', getSpecificShow)

router.get('/shows', getShows);

module.exports = router;
