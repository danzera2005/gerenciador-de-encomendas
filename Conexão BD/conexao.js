const mysql = require('mysql2');

const conn = mysql.createConnection({
host:'localhost',
user:'root',
database:'manager_tasks',
multipleStatements:true,
port: 3306
});

module.exports = conn;