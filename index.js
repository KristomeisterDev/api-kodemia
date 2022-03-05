require('dotenv').config()
//aqui inicializamos o levantamos nuestra aplicación
//importamos el server
const server = require('./src/server')
//importamos la conexion
const dbConnect = require('./src/lib/db')

//console.log(process.env)

const PORT = process.env.PORT || 8080


//ejecutamos la funcion de la conexion
dbConnect()//devuelve promesa 
    .then(() => {
        //regresa la conexion
        console.log('Database Connected: ')
        //inicializamos server
        server.listen (PORT, () => {
            console.log('Server Running on Port 8080');
        })
    })
    .catch((error) => {
        console.log('Error: ', error)
    })

//GET /koders
/*
1-crear (asegurarme que exista) el modelo necesario MODELS
2-crear el caso de uso necesario (useCases/) USECASES
3-crear el end point (routers/) PRESENTERS
*/ 

//practica
// POST /koders
// PATCH /koders/:id
// DELETE /koders/:id
// GET /koders/:id

//Authenticacion


//Autorizacion


//flujo de registro y loggeo

//POST /users/login
//body {email, password}
//response: token

//model users
//crear caso de uso
//end point 
//validar que este montado

//bcrypt
//jwt
