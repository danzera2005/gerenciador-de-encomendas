const express = require('express')
const route = express.Router()
const RouteHome = require('./src/controlls/homecontrolls')
const routeCadastrar = require('./src/controlls/cadastrarcontrolls')
const routeUpdate = require('./src/controlls/editcontrolls')
const routeDelete = require('./src/controlls/deletcontrolls')


route.get('/home',RouteHome.inicio);
//rotas cadastrar
route.get('/cadastrar',routeCadastrar.homeCadastrar);
route.post('/cadastrar', routeCadastrar.novoProduto);
// rotas atualizar
route.post('/editar', routeUpdate.update);
route.post('/concluirTarefa', routeUpdate.editarEstadoTerefa);
//rotas deletar
route.get('/deletar',routeDelete.delete);
route.post('/deletar',routeDelete.excluir);
route.post('/deleteAll', routeDelete.deleteAll);


module.exports = route;