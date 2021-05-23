const express = require('express');
const dbController = require('../controllers/dbController');

const router = express.Router();

router.get('/', dbController.insertNetflix, (req, res) => {
  console.log('hi');
  console.log(res.locals.netflix);
});

module.exports = router;
