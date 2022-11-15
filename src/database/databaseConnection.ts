const mysql = require('mysql2/promise');

export const pool = mysql.createPool({
  host: 'mysql8-lnr',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'lnrtelegram',
});
