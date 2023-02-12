const conn = require('../../Conexão BD/conexao')

module.exports.inicio = (req,res) =>{
     
    const mysql = "SELECT nome_produto FROM estoquee"
    

    conn.query(mysql,[],(err,result)=>{
        if(err) throw err;
        res.render("Home",{lista:result})
    })
    
}


