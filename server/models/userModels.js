const { Pool } = require('pg');

// const PG_URI =
//   'postgres://avlofxwe:slIgslC7C_3bZouSFtWb17CEjmDv-yEC@otto.db.elephantsql.com/avlofxwe';
const PG_URI =
  'postgres://ssigjlks:Zb12dIhHTONQtoKMuTSyXWc2VlVcE6zm@kashin.db.elephantsql.com/ssigjlks';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

// Database schema available here:

module.exports = {
  query: (text, params, callback) => {
    console.log('Executed query! ');
    return pool.query(text, params, callback);
  },
};
 