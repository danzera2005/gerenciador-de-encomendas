const express = require('express')
const app = express()
const port = 3000 
const path = require('path')
const conn = require('./Conexão BD/conexao')

const routes = require('./routes')
const con = require('./Conexão BD/conexao')


app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.use(routes)


app.set('views', path.resolve(__dirname, 'src' , 'views'))
app.set('view engine', 'ejs')



app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index2.html")
})

app.post('/',(req,res)=>{
    
    const mysql = "INSERT INTO usuarios(nome_usuario,senha_usuario) VALUES(?)"

    const values =[
        req.body.nome,
        
        
        req.body.senha,
    ];

    conn.query(mysql,[values],(err) =>{

        if(err) throw err;
        console.log("usuario cadastrado")
        res.redirect("back")
    })
    

 })

conn.connect(err=>{

    if(err) throw err;
    console.log("DB connected")

    
})


app.listen(port,(err) =>{

if(err){
    console.log(err)
    return
}else{
    console.log("servidor conectado na porta:"+port)
}

})
