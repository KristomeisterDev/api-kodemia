//1.Este archivo guardara la definición de mi servidor
//2.configurara los middlewares
//3.montar los routers
//importamos express
const express = require('express')
const cors = require('cors')
//importamos router
const kodersRouter = require('./routers/koders')
const usersRouter = require('./routers/users')

//1.server (instanciamos el server)
const server = express() 

//2.middlewares
server.use(cors())
server.use(express.json())


//3.routers 
//montamos el router 
server.use('/koders', kodersRouter)
server.use('/users', usersRouter)

//exportamos el server
module.exports = server

