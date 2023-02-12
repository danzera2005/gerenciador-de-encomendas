
const conn = require('../../Conexão BD/conexao')

module.exports.homeCadastrar = (req,res) =>{

    res.render("Cadastrar")
}

module.exports.novoProduto = (req,res) =>{

      const mysql = "INSERT INTO estoquee( nome_produto , peso_produto ,altura_produto ,largura_produto ,entregador_produto,endereco_entrega,status_entrega) VALUES(?)"


      const values = [

        req.body.nome_produto,
        req.body.altura,
        req.body.altura,
        req.body.peso,
        req.body.entregador,
        req.body.endereco,
        req.body.status,
        
      ];

      conn.query(mysql,[values],(err) =>{

        if(err) throw err;
        console.log("produto cadastrado")
        res.redirect("back")
      })


 
}