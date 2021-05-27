/* eslint-disable linebreak-style */
const express = require('express');
const path = require('path');
const dbController = require('../controllers/dbController');
const userController = require('../controllers/userController');

const router = express.Router();

// send back user data
router.post('/',
  userController.signup,
  (req, res) => {
    res.status(200).send('Signed Up');
  });


// send back user data
router.get(
  '/login',
  userController.login,
  userController.setServices,
  (req, res) => {
    res.status(200).send('Logged In');
  });

module.exports = router;