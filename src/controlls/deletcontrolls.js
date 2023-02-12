const conn = require('../../Conexão BD/conexao')


module.exports.delete = (req,res) =>{

    res.render("deletar")
}




module.exports.excluir = (req,res) =>{

    const mysql = "DELETE FROM estoquee WHERE id =?"
    const values = [

        req.body.id,
    ];

    conn.query(mysql,[values],(err) =>{

        if(err) throw err;
        console.log("produto deletado com sucesso")
        res.redirect("back")
    })

}