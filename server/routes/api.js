const express = require('express');
const path = require('path');
const dbController = require('../controllers/dbController');
const userController = require('../controllers/userController');

// Instantiate new router object
const router = express.Router();

// Handles POST requests made to /api/signup
router.post('/signup', 
  userController.bcrypt, 
  userController.signup,
  userController.setServices,
  (req, res) => {
    res.status(200).send({loggedIn: true});
  }
);

// Handles POST requests made to /api/login
router.post(
  '/login',
  userController.login,
  userController.setServices,
  (req, res) => {
    return res.status(200).send({loggedIn: true});
  },
);

// Handles POST requests made to /api/search
router.post(
  '/search',
  userController.getIMDB,
  userController.searchServices,
  (req, res) => {
    res.status(200).json(res.locals.available);
  },
);

module.exports = router;
