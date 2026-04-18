
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'restaurant_db',
  password: 'shreyas',
  port: 5001,
});

module.exports = pool;
