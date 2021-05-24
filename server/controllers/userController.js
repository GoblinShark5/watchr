/* eslint-disable no-console */
const db = require('../models/userModels');

const userController = {};

userController.signup = (req, res, next) => {
  console.log('Signup body', req.body);
  console.log('Signup query', req.query);
  const query = `
  INSERT INTO users(username, email, password, netflix, hulu, amazon)
  VALUES ('${req.body.newUser}', '${req.body.email}', '${req.body.newPassword}' , 
  '${JSON.parse(req.body.netflix)}', '${JSON.parse(req.body.hulu)}',
  '${JSON.parse(req.body.amazon)}')
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
  WHERE username = '${req.body.username}' AND password = '${req.body.password}'
  `;

  console.log('Made it to the login controller');
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
  WHERE username = '${req.body.username}'
  `;

  console.log('made it to the cookie controller');

  db.query(query).then((data) => {
    // console.log(typeof data.rows[0].netflix);
    console.log(data.rows[0]);
    res.cookie('userServices', JSON.stringify(data.rows[0]));
    next();
  });
};

module.exports = userController;
