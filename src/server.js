//Este archivo guardara la definición de mi servidor
//configurara los middlewares
//montar los routers
const express = require('express')
const kodersRouter = require('./routers/koders')
const server = express() 

//middlewares


//routers 
server.use('/koders', kodersRouter)

module.exports = server