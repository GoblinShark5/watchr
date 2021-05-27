/* eslint-disable no-console */
const axios = require('axios');
const db = require('../models/userModels');
const config = require('../../api-key.json');
const bcrypt = require('bcrypt')

const saltRounds = 10;

const userController = {};

userController.bcrypt = (req, res, next) => {
  const { newPassword } = req.body;
  
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(newPassword, salt, (err, hash) => {
      res.locals.bcrypt = hash;
      return next();
    })
  });
}

userController.signup = (req, res, next) => {
  console.log('Signup body', req.body);
  console.log('Signup query', req.query);
  console.log('inside signup', res.locals.bcrypt);

  const query = `
  INSERT INTO watchst.users(username, email, password, netflix, hulu, amazon)
  VALUES ('${req.body.newUser}', '${req.body.email}', '${
    res.locals.bcrypt
  }' , 
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
  SELECT password
  FROM watchst.users
  WHERE username = '${req.body.username}'
  `;

  console.log('Made it to the login controller');
  db.query(loginQuery)
    .then(data => {
      // console.log(data);
      bcrypt.compare(req.body.password, data.rows[0].password, (err, result) => {
        if (err) {
          return next(err);
        }
        if (result) {
          console.log('bcrypt compare', result);
          res.locals.correctPW = result;
          return next();
        }
        else return next('Incorrect username/password');
      })
    })
    .catch(err => {
      console.log(`Database request error! ${err}`);
      return next(err);
    })

};

userController.setServices = (req, res, next) => {
  const query = `
  SELECT _id, netflix, hulu, amazon
  FROM watchst.users
  WHERE username = '${req.body.username}'
  `;

  console.log('made it to the cookie controller');

  db.query(query)
    .then((data) => {
      // console.log(typeof data.rows[0].netflix);
      console.log('data.rows', data.rows[0]);
      data.rows[0].prime = data.rows[0].amazon;
      delete data.rows[0].amazon;
      res.cookie('userServices', JSON.stringify(data.rows[0]));
      res.locals.cookie = data.rows[0];
      next();
    })
    .catch((err) => {
      return next(err);
    })
};

userController.searchServices = (req, res, next) => {
  // check the properties in the cookie to check which services the user has, save that in a variable, array of strings if true
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
      'x-rapidapi-key': config.API_KEY,
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
      'x-rapidapi-key': config.API_KEY,
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
