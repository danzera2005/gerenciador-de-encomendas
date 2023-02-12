
const conn = require('../../Conexão BD/conexao')

module.exports.editar = (req,res) =>{

    res.render("Editar")
}


module.exports.update = (req,res) =>{

    const mysql = "UPDATE estoquee SET nome_produto =? , peso_produto=? ,altura_produto=? ,largura_produto=? ,entregador_produto=?,endereco_entrega=?,status_entrega=?  WHERE id = ?;"

    const nome = [

        req.body.nome_produto,
    
    ];
    const entregador = [

        
        req.body.entregador,
        

    
    ];
    const peso = [

        req.body.peso,
        

    ];
    const altura = [

        req.body.altura,
    
    ];
    const largura = [

        req.body.largura,
    
    ];
    const endereco = [

        req.body.endereco,
    
    ];
    const entrega = [

        req.body.status,
    
    ];

    const id = [

        req.body.id,
    ];

    conn.query(mysql,[nome,entregador,peso,altura,largura,endereco,entrega,id],(err) =>{

        if(err) throw err;
        console.log("produto atualizado com sucesso")
        res.redirect("back")
    })

}