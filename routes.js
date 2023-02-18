const express = require('express')
const route = express.Router()


const RouteHome = require('./src/controlls/homecontrolls')
const routeCadastrar = require('./src/controlls/cadastrarcontrolls')
const routeUpdate = require('./src/controlls/editcontrolls')
const routeDelete = require('./src/controlls/deletcontrolls')


//rotas inicio



//rotas estoque
route.get('/estoque',RouteHome.inicio)

//rotas cadastrar
route.get('/cadastrar',routeCadastrar.homeCadastrar)
route.post('/cadastrar', routeCadastrar.novoProduto)

// rotas atualizar
route.get('/editar', routeUpdate.editar)
route.post('/editar', routeUpdate.update)

//rotas deletar
route.get('/deletar',routeDelete.delete)
route.post('/deletar',routeDelete.excluir)


module.exports = route;