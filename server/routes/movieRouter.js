/* eslint-disable linebreak-style */
const express = require('express');
const path = require('path');
const dbController = require('../controllers/dbController');
const userController = require('../controllers/userController');

const router = express.Router();

// refactor res.locals.kyung with a more descriptive name
router.post(
  '/search',
  userController.getIMDB,
  userController.searchServices,
  (req, res) => {
    console.log('Search results: ', res.locals.kyung);
    res.status(200).json(res.locals.kyung);
  },
);

module.exports = router;