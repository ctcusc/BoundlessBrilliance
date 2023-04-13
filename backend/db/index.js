require('dotenv').config();
const { Pool } = require("pg");
const pg = require('pg');

const pool = new Pool();

// const pool = new pg.Pool({
//   connectionString: process.env.POSTGRESQL_EXTERNAL_URL,
//   database: 'bb_database',
// });


module.exports = {
  query: (text, params) => pool.query(text, params),
};
