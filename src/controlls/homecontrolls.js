const conn = require('../../Conexão BD/conexao')


module.exports.inicio = (req,res) =>{
    const mysql = "SELECT* FROM tasks WHERE state_task = 'aberta'"
    conn.query(mysql,[],(err,result)=>{
        if(err) throw err;
        res.render("Home",{lista:result})
    })
}


