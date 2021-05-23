const { Pool } = require('pg');

// const PG_URI =
//   'postgres://avlofxwe:slIgslC7C_3bZouSFtWb17CEjmDv-yEC@otto.db.elephantsql.com/avlofxwe';
const PG_URI = 'postgres://ajocojat:Xhe0L8OJP5qmAAaktHhXaz2UFiujau2a@kashin.db.elephantsql.com/ajocojat';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

// Database schema available here:

module.exports = {
  query: (text, params, callback) => {
    console.log(
      '%cExecuted query: ',
      text,
      'font-weight: bold; font-size: 20px;color: red; text-shadow: 1px 1px 0 rgb(217,31,38) , 2px 2px 0 rgb(226,91,14) , 3px 3px 0 rgb(245,221,8) , 4px 4px 0 rgb(5,148,68) , 5px 5px 0 rgb(2,135,206) , 6px 6px 0 rgb(4,77,145) , 7px 7px 0 rgb(42,21,113)',
    );
    return pool.query(text, params, callback);
  },
};
