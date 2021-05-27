const express = require('express');
const path = require('path');
const dbController = require('../controllers/dbController');
const userController = require('../controllers/userController');

const router = express.Router();

// router.get('/', (req, res) => {
//   // console.log(res.locals.netflix.results.length);
//   // console.log(res.locals.netflix);
//   console.log('DIRNAME: ', __dirname);
//   res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
//   // res.status(200).redirect('/homepage');
// });

// app.use(express.static(path.join))
// router.get('/homepage', (req, res) => {
//   // res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
//   res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
// });

router.post('/signup', 
  userController.bcrypt, 
  userController.signup, 
  (req, res) => {
    res.status(200).send('Created User');
  }
);

router.post(
  '/login',
  userController.login,
  userController.setServices,
  (req, res) => {
    console.log('SUCCESS');
    return res.status(200).send({loggedIn: true});
  },
);

router.post(
  '/search',
  userController.getIMDB,
  userController.searchServices,
  (req, res) => {
    console.log('Search success!');
    console.log('Search results: ', res.locals.kyung);
    res.status(200).json(res.locals.kyung);
  },
);

module.exports = router;
