const conn = require('../../Conexão BD/conexao')

module.exports.delete = (req,res) =>{
    res.render("deletar");
}

module.exports.excluir = (req,res) =>{
    const mysql = "DELETE FROM tasks WHERE id =?"
    const values = [
        req.body.id,
    ];
    console.log(values)
    conn.query(mysql,[values],(err) =>{
        if(err) throw err;
        res.redirect("back")
    });
}

module.exports.deleteAll = (req,res)=>{
    const mysql = "DELETE FROM tasks"
    conn.query(mysql, (err)=>{
        if(err) throw err;
        res.redirect("back")
    });
}