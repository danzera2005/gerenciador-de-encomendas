
const conn = require('../../Conexão BD/conexao')

module.exports.homeCadastrar = (req,res)=>{
    res.render("Cadastrar",{})
}

module.exports.novoProduto = (req,res) =>{
      const mysql = "INSERT INTO tasks(date_task_create,name_task ,state_task) VALUES(?)"
      const values = [
        req.body.date_task_cad,
        req.body.create_name_task,
        "aberta"
      ];
      conn.query(mysql,[values],(err) =>{
        if(err) throw err;
        console.log("cadastrou")
        res.redirect("back")
      })
}