const axios = require('axios');
const pgp = require('pg-promise')({
  capSQL: true,
});
const db = require('../models/userModels');

const pgpdb = pgp(
  'postgres://ajocojat:Xhe0L8OJP5qmAAaktHhXaz2UFiujau2a@kashin.db.elephantsql.com/ajocojat',
);

const dbController = {};

dbController.insertNetflix = async (req, res, next) => {
  res.locals.netflix = [];
  for (let i = 0; i < 100; i++) {
    const options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/pro',
      params: {
        country: 'us',
        service: 'netflix',
        type: 'movie',
        page: String(i),
        language: 'en',
      },
      headers: {
        'x-rapidapi-key': 'e0d178da4amsh91f0fb94afc02adp192ddbjsn3dcf07dc4de5',
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
      },
    };

    await axios
      .request(options)
      .then((response) => {
        res.locals.netflix.push(response.data);
        if (i === 99) next();
      })
      .catch((error) => {
        console.error(error);
        next(error);
      });
  }
};

module.exports = dbController;
