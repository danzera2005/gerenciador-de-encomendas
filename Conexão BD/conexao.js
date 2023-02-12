const mysql = require('mysql2')



const conn = mysql.createConnection({

host:'db4free.net',
user:'danilo_encomenda',
password:'maeeuteamo25',
database:'encomendas',
multipleStatements:true


})

module.exports = conn;