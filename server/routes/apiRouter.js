/* eslint-disable linebreak-style */
// DELETE WHEN WE ARE SURE WE DON"T NEED THIS

const express = require('express');
const path = require('path');
const dbController = require('../controllers/dbController');
const userController = require('../controllers/userController');

const router = express.Router();

// is anything fetching from /homepage?
// router.get('/homepage', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
// });



module.exports = router;
