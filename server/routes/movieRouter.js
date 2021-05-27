/* eslint-disable linebreak-style */
const express = require('express');
const path = require('path');
const dbController = require('../controllers/dbController');
const movieController = require('../controllers/movieController');

const router = express.Router();

// search for a movie
router.get(
  '/search',
  movieController.getIMDB,
  movieController.getServices,
  (req, res) => {
    console.log('Search results: ', res.locals.movie);
    res.status(200).json(res.locals.movie);
  },
);

module.exports = router;