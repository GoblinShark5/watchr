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
      res.locals.newUser = response.rows[0].username;
      return next();
    })
    .catch((err) => {
      console.log('signup query error');
      console.log(err);
      return next({ err });
    });
};

// checks login info against database
userController.login = (req, res, next) => {
  const { username, password } = req.body;
  const values = [username, password];

  const loginQuery = `
  SELECT username, password
  FROM watchr.users
  WHERE username = $1 AND password = $2;
  `;

  db.query(loginQuery, values)
    .then(data => {
      res.locals.user = data.rows[0].username;
      return next();
    })
    .catch(err => next({ err }));
};

// fetch services user uses from database, sets to cookie for later access
userController.setServicesCookie = (req, res, next) => { 
  const { username } = req.body;
  const values = [username];

  const query = `
  SELECT netflix, hulu, amazon
  FROM watchr.users
  WHERE username = $1;
  `;

  db.query(query, values)
    .then((data) => {
      // take query response and add info to cookies
      // Refactor data accessed as "prime" to be "amazon" on front-end?
      data.rows[0].prime = data.rows[0].amazon;
      delete data.rows[0].amazon;
      res.cookie('userServices', JSON.stringify(data.rows[0]));
      return next();
    })
    .catch(err => next({ err }));
};

module.exports = userController;

// / checks user's cookies to verify services the user has signed up for
// // stores as local variable (array of strings)
// userController.searchServices = (req, res, next) => {
//   // check the properties in the cookie to check which services the user has,
//   // save that in a variable,
//   // array of strings if true

//   console.log('Search query: ', req.body.search);
//   const array = [];
//   const userServices = JSON.parse(req.cookies.userServices);
//   console.log('searchServices cookie: ', userServices);
//   Object.keys(userServices).forEach((service) => {
//     // console.log('Service: ', service);
//     if (userServices[service]) {
//       array.push(service);
//     }
//   });

//   console.log('User services array: ', array);
//   // if array has no values, return 'no results' with no api call
//   if (array.length === 0) {
//     // res.locals.body = 'No results';
//     next();
//   }

//   const options = {
//     method: 'GET',
//     url: 'https://streaming-availability.p.rapidapi.com/get/basic',
//     params: { country: 'us', imdb_id: `${res.locals.imdb}` },
//     headers: {
//       'x-rapidapi-key': variables.streamingAPI,
//       'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
//     },
//   };

//   // streaming API request
//   axios
//     .request(options)
//     .then((response) => {
//       res.locals.kyung = {};
//       // console.log('API Response.data: ', response.data);
//       console.log('posterURL', response.data.posterURLs['500']);
//       console.log('streaming info: ', response.data.streamingInfo);

//       // STEP 1: Add corresponding streaming services to obj
//       Object.keys(response.data.streamingInfo).forEach((el) => {
//         // Test if the streaming servics from the returned object match the user's cookies streaming services, if so add to returned object
//         if (array.includes(el)) {
//           res.locals.kyung[el] = true;
//         }
//       });
//       // STEP 2: Add poster and title to the obj
//       res.locals.kyung.poster = response.data.posterURLs['342'];
//       res.locals.kyung.title = response.data.title;

//       next();
//     })
//     .catch((error) => {
//       console.error(error);
//       next(error);
//     });

// userController.getIMDB = (req, res, next) => {
//   const options = {
//     method: 'GET',
//     url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
//     params: { s: `${req.body.search}`, page: '1', type: 'movie', r: 'json' },
//     headers: {
//       'x-rapidapi-key': variables.imdbAPI,
//       'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
//     },
//   };

//   axios
//     .request(options)
//     .then((response) => {
//       console.log('imdb', response.data);
//       res.locals.imdb = response.data.Search[0].imdbID;
//       next();
//     })
//     .catch((error) => {
//       console.error(error);
//       next(error);
//     });
// };