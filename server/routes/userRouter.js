/* eslint-disable linebreak-style */
const express = require('express');
const path = require('path');
const dbController = require('../controllers/dbController');
const userController = require('../controllers/userController');

const router = express.Router();

// send back user data
router.post('/signup',
  userController.signup,
  (req, res) => {
    res.status(200).send({ user: res.locals.newUser })
  });

// send back user data
router.post(
  '/',
  userController.login,
  userController.setServicesCookie,
  (req, res) => {
    res.status(200).send({ user: res.locals.user });
  });

module.exports = router;