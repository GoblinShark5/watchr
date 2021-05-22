const db = require('../models/userModels');

const userController = {};

userController.login = (req, res, next) => {
  const loginQuery = 'SELECT username FROM users';

  db.query(loginQuery, (err, data) => {
    if (err) {
      console.log(`Database request error! ${err}`);
      return next(err);
    }
    console.log(`Successfully got data from database ${data.rows}`);
    res.locals.user = data.rows;
    return next();
  });
};

module.exports = userController;
