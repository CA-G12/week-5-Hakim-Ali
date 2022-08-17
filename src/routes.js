const express = require('express');
const getShows = require('./controllers/films');

const router = express.Router();
router.get('/shows', getShows);

module.exports = router;
