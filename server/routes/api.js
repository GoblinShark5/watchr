const express = require('express');
const dbController = require('../controllers/dbController');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', dbController.insertNetflix, (req, res) => {
  // console.log(res.locals.netflix.results.length);
  // console.log(res.locals.netflix);
  res.status(200).json(res.locals.netflix);
});

router.post('/signup', userController.signup, (req, res) => {
  res.status(200).redirect('/');
});

router.post(
  '/login',
  userController.login,
  userController.setServices,
  (req, res) => {
    console.log('SUCCESS');
    console.log(req.cookies.userServices);
    res.status(200).redirect('/');
  },
);

module.exports = router;
