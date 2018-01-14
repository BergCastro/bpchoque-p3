const express = require('express')
const auth = require('./auth')

module.exports = function (server) {

    /*
     * Rotas protegidas por Token JWT
     */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    const Prova = require('../api/prova/provaService')
    Prova.register(protectedApi, '/provas')

    const Ope = require('../api/ope/opeService')
    Ope.register(protectedApi, '/opes')

    const TiposOpes = require('../api/tiposOpes/tiposOpesService')
    TiposOpes.register(protectedApi, '/tiposOpes')

   

    

    /*
     * Rotas abertas
     */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}