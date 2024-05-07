const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'bd@2024',
  database: 'bdproject',
});

module.exports = conn;
