
const conn = require('../../Conexão BD/conexao')

module.exports.update = (req,res) =>{
    const mysql = "UPDATE tasks SET name_task =?, date_task_create = ? WHERE id = ?;"
    const nome = [
        req.body.name_task,
    ];
    const data = [
        req.body.date_task
    ];
    const id = [
        req.body.id
    ]
    console.log(nome, id)
    console.log(req.body)
    conn.query(mysql,[nome,data,id],(err) =>{
        if(err) throw err;
        res.redirect("back")
    })

}


module.exports.editarEstadoTerefa = (req,res) =>{
    const mysql = "UPDATE tasks SET state_task = 'concluida' WHERE id = ?"

    const id = [
        req.body.id
    ]
    conn.query(mysql,[id], (err)=>{
        if(err) throw err;
        console.log("Tarefa concluida")
        res.redirect("back")
    });
}