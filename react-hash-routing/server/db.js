const pg = require('pg');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL
  // sl: {
  //   resjectUnauthorized: false
  // }
});

module.exports = db;
