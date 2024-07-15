const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'local',
    user: 'root',
    password: 'root',
    database: 'todolist'
});



module.exports = connection;