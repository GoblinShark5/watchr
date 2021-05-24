/* eslint-disable no-console */
const db = require('../models/userModels');

const userController = {};

userController.signup = (req, res, next) => {
  const query = `
  INSERT INTO users(username, email, password, netflix, hulu, amazon)
  VALUES ('${req.query.username}', '${req.query.email}', '${
    req.query.password
  }', '${JSON.parse(req.query.netflix)}', '${JSON.parse(
    req.query.hulu,
  )}', '${JSON.parse(req.query.amazon)}')
  `;

  db.query(query)
    .then(() => {
      next();
    })
    .catch((err) => {
      if (err) return next(err);
    });
};

userController.login = (req, res, next) => {
  const loginQuery = `
  SELECT username, password
  FROM users
  WHERE username = '${req.query.username}' AND password = '${req.query.password}'
  `; // <-- fix this query

  db.query(loginQuery, (err, data) => {
    if (err) {
      console.log(`Database request error! ${err}`);
      return next(err);
    }
    if (data.rows[0]) {
      next();
    } else {
      res.redirect('/login');
    }
    // console.log(`Successfully got data from database ${data.rows}`);
    // res.locals.user = data.rows;
    // return next();
  });
};

userController.setServices = (req, res, next) => {
  const query = `
  SELECT netflix, hulu, amazon
  FROM users
  WHERE username = '${req.query.username}'
  `;

  db.query(query).then((data) => {
    console.log(typeof data.rows[0].netflix);
    res.cookie('userServices', JSON.stringify(data.rows[0]));
    next();
  });
};

module.exports = userController;
