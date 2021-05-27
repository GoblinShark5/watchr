const axios = require('axios');
const pgp = require('pg-promise')({
  capSQL: true,
});
const db = require('../models/userModels');

const pgpdb = pgp(
  'postgres://ssigjlks:Zb12dIhHTONQtoKMuTSyXWc2VlVcE6zm@kashin.db.elephantsql.com/ssigjlks',
);

const dbController = {};

dbController.insertNetflix = async (req, res, next) => {
  res.locals.netflix = [];

  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/search/pro',
    params: {
      country: 'us',
      service: 'netflix',
      type: 'movie',
      order_by: 'original_title',
      keyword: 'scott pilgrim',
      // year_min: '2000',
      // year_max: '2020',
      // genre: '18',
      // page: '1',
      // desc: 'true',
      // language: 'en',
    },
    headers: {
      'x-rapidapi-key': 'e0d178da4amsh91f0fb94afc02adp192ddbjsn3dcf07dc4de5',
      'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then((response) => {
      console.log('penis');
      res.locals.netflix = response.data;
      next();
    })
    .catch((error) => {
      console.error(error);
    });

  // const options = {
  //   method: 'GET',
  //   url: 'https://streaming-availability.p.rapidapi.com/leaving',
  //   params: { service: 'netflix', country: 'us', type: 'movie' },
  //   headers: {
  //     'x-rapidapi-key': 'e0d178da4amsh91f0fb94afc02adp192ddbjsn3dcf07dc4de5',
  //     'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
  //   },
  // };

  // axios
  //   .request(options)
  //   .then((response) => {
  //     console.log('hi');
  //     res.locals.netflixleaving = response.data;
  //     next();
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
};

module.exports = dbController;
