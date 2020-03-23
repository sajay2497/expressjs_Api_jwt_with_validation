// get the client
const { createPool } = require("mysql2");
 
// create the connection to database
const pool = createPool({
    host: 'localhost',
  user: 'root',
  password: '',
  database: 'user_profile',
  connectionLimit: 10
});

  module.exports = pool;