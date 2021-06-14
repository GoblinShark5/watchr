/* eslint-disable no-console */
const axios = require('axios');
const db = require('../models/userModels');
const config = require('../../api-key.json');
const bcrypt = require('bcrypt')

const userController = {};

// The cost factor determines how much time is needed to calculate a single bcrypt hash
const saltRounds = 10;

// Middleware to encrypt passwords using bcrypt
userController.bcrypt = (req, res, next) => {
  // Destructure password from request body
  const { password } = req.body;
  // Generate the salt by passing in saltRounds (cost factor)
  bcrypt.genSalt(saltRounds, (err, salt) => {
    // Hash a password by passing in the plaintext into the hash function
    bcrypt.hash(password, salt, (err, hash) => {
      // Save encrypted password into res.locals to be accessed later
      res.locals.bcrypt = hash;
      return next();
    })
  });
}

// Middleware to sign users up with information from POST request body
userController.signup = (req, res, next) => {
  // Query to write new user into postgresql
  const query = `
  INSERT INTO watchst.users(username, email, password, netflix, hulu, amazon)
  VALUES ('${req.body.username}', '${req.body.email}', '${res.locals.bcrypt}', 
  '${JSON.parse(req.body.netflix)}', '${JSON.parse(req.body.hulu)}',
  '${JSON.parse(req.body.amazon)}')
  `;

  // Execute query
  db.query(query)
    .then(() => next())
    .catch((err) => {
      if (err) return next(err);
    });
};

// Middleware to log user in application
userController.login = (req, res, next) => {
  // Query to check username and password in postgresql
  const loginQuery = `
  SELECT password
  FROM watchst.users
  WHERE username = '${req.body.username}'
  `;

  // Execute query  
  db.query(loginQuery)
    .then(data => {
      // Compare plaintext passed-in password with queried encrypted password using compare function
      bcrypt.compare(req.body.password, data.rows[0].password, (err, result) => {
        if (err) {
          return next(err);
        } if (result) {
          return next();
        } else {
          return next('Incorrect username/password');
        }
      })
    })
    .catch(err => {
      return next(err);
    })
};

// Middleware to save user's streaming services into cookie
userController.setServices = (req, res, next) => {
  // Destructure username from request body
  const {username} = req.body;
  // Query string to get user id and available streaming services
  const query = `
  SELECT _id, netflix, hulu, amazon
  FROM watchst.users
  WHERE username = $1
  `;

  // Execute query
  db.query(query, [username])
    .then((data) => {
      // Replace key of 'amazon' with 'prime' to compare data from external api
      data.rows[0].prime = data.rows[0].amazon;
      delete data.rows[0].amazon;
      // Save current user's services into the cookies
      res.cookie('userServices', JSON.stringify(data.rows[0]));
      return next();
    })
    .catch((err) => {
      return next(err);
    })
};

// Middleware to check available streaming services of passed movie
userController.searchServices = (req, res, next) => {
  // userServices is an object of user's streaming services
  const userServices = JSON.parse(req.cookies.userServices);
  const array = [];
  // Enumerate through userServices and convert into array form
  Object.keys(userServices).forEach((service) => {
    if (userServices[service]) {
      array.push(service);
    }
  });

  // If array has no values, return 'no results' with no api call
  if (array.length === 0) {
    return next();
  }

  // Define body of get request
  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/get/basic',
    params: { country: 'us', imdb_id: `${res.locals.imdb}` },
    headers: {
      'x-rapidapi-key': 'e0d178da4amsh91f0fb94afc02adp192ddbjsn3dcf07dc4de5',
      'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
    },
  };

  // Make get request to check streaming availability for current movie
  axios
    .request(options)
    .then((response) => {
      res.locals.available = {};
      // Add corresponding streaming services to obj
      Object.keys(response.data.streamingInfo).forEach((el) => {
        // Test if the streaming servics from the returned object match the user's cookies streaming services, if so add to returned object
        if (array.includes(el)) {
          res.locals.available[el] = true;
        }
      });
      // Add poster and title to the obj
      res.locals.available.poster = response.data.posterURLs['342'];
      res.locals.available.title = response.data.title;
      return next();
    })
    .catch((error) => {
      console.error(error);
      return next(error);
    });
};

// Middleware to search for a movie with user input
userController.getIMDB = (req, res, next) => {
  // Define body of get request
  const options = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: { s: `${req.body.search}`, page: '1', type: 'movie', r: 'json' },
    headers: {
      'x-rapidapi-key': '324525e47dmshe4ac5f7930cff96p17f69cjsnd84de699ff4e',
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
    },
  };
  // Make get request to get movie id after search
  axios
    .request(options)
    .then((response) => {
      // Save movie id into res.locals.imdb
      res.locals.imdb = response.data.Search[0].imdbID;
      next();
    })
    .catch((error) => {
      console.error(error);
      next(error);
    });
};

module.exports = userController;
