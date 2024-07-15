const mysql = require('mysql2/promise');
require('dotenv').config();
const HOST =  process.env.SQL_HOST
const USER =  process.env.SQL_USER
const PASS =  process.env.SQL_PASS
const DB =  process.env.SQL_DB

console.log(HOST)

const connection = mysql.createPool({
    host: HOST,
    user: USER,
    password: PASS,
    database: DB
});



module.exports = connection;