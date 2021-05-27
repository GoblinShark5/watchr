/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const axios = require('axios');
const db = require('../models/userModels');
const variables = require('../../variables');

const userController = {};

// You will need to defend against SQL injection attacks here
userController.signup = (req, res, next) => {
  const {
    newUser, newPassword, email, netflix, amazon, hulu,
  } = req.body;
  const values = [newUser, email, newPassword, netflix, hulu, amazon];
  const query = `
  INSERT INTO watchr.users(username, email, password, netflix, hulu, amazon)
  VALUES ($1, $2, $3, $4, $5, $6) RETURNING username, netflix, hulu, amazon;
  `;

  db.query(query, values)
    .then(response => {
      res.locals.newUser = response.rows[0];
      return next();
    })
    .catch((err) => {
      console.log('signup query error');
      console.log(err);
      return next({ err });
    });
};

userController.login = (req, res, next) => {
  const { username, password } = req.query;
  const values = [username, password];

  const loginQuery = `
  SELECT username, password
  FROM watchr.users
  WHERE username = $1 AND password = $2;
  `;

  db.query(loginQuery, values)
    .then(data => {
      res.locals.user = data.rows[0];
      return next();
    })
    .catch(err => next({ err }));
};

userController.setServicesCookie = (req, res, next) => { 
  const { username } = req.query;
  console.log('username', username);
  const values = [username];
  
  const query = `
  SELECT netflix, hulu, amazon
  FROM watchr.users
  WHERE username = $1;
  `;

  console.log('made it to the cookie controller');

  db.query(query, values)
    .then((data) => {
      // take query response and add info to cookies
      data.rows[0].prime = data.rows[0].amazon;
      delete data.rows[0].amazon;
      res.cookie('userServices', JSON.stringify(data.rows[0]));
      return next();
    })
    .catch(err => next({ err }));
  };

userController.searchServices = (req, res, next) => {
  // check the properties in the cookie to check which services the user has,
  // save that in a variable,
  // array of strings if true
  console.log('Search query: ', req.body.search);
  const array = [];
  const userServices = JSON.parse(req.cookies.userServices);
  console.log('searchServices cookie: ', userServices);
  Object.keys(userServices).forEach((service) => {
    // console.log('Service: ', service);
    if (userServices[service]) {
      array.push(service);
    }
  });

  console.log('User services array: ', array);
  // if array has no values, return 'no results' with no api call
  if (array.length === 0) {
    // res.locals.body = 'No results';
    next();
  }

  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/get/basic',
    params: { country: 'us', imdb_id: `${res.locals.imdb}` },
    headers: {
      'x-rapidapi-key': variables.imdbAPI,
      'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.locals.kyung = {};
      // console.log('API Response.data: ', response.data);
      console.log('posterURL', response.data.posterURLs['500']);
      console.log('streaming info: ', response.data.streamingInfo);

      // STEP 1: Add corresponding streaming services to obj
      Object.keys(response.data.streamingInfo).forEach((el) => {
        // Test if the streaming servics from the returned object match the user's cookies streaming services, if so add to returned object
        if (array.includes(el)) {
          res.locals.kyung[el] = true;
        }
      });
      // STEP 2: Add poster and title to the obj
      res.locals.kyung.poster = response.data.posterURLs['342'];
      res.locals.kyung.title = response.data.title;

      next();
    })
    .catch((error) => {
      console.error(error);
      next(error);
    });
};

userController.getIMDB = (req, res, next) => {
  const options = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: { s: `${req.body.search}`, page: '1', type: 'movie', r: 'json' },
    headers: {
      'x-rapidapi-key': variables.imdbAPI,
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then((response) => {
      console.log('imdb', response.data);
      res.locals.imdb = response.data.Search[0].imdbID;
      next();
    })
    .catch((error) => {
      console.error(error);
      next(error);
    });
};

module.exports = userController;
