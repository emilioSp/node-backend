import mysql from 'mysql2/promise.js';

const dbURI = 'mysql://root:password@127.0.0.1:3306/db';

// Create the connection pool. The pool-specific settings are the defaults
const database = mysql.createPool({
  uri: dbURI,
  namedPlaceholders: true,
  connectionLimit: 10,
  maxPreparedStatements: 25,
});

export default database;
