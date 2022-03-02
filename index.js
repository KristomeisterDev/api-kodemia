//aqui inicializamos o levantamos nuestra aplicación
const server = require('./src/server')

const dbConnect = require('./src/lib/db')

dbConnect() 
    .then(() => {
        console.log('Database Connected: ')
        server.listen (8080,() => {
            console.log('server running on port 8080');
        })
    })
    .catch((error) => {
        console.log('Error: ', error)
    })

//GET /koders
/*
1-crear (asegurarme que exista) el modelo necesario
2-crear el caso de uso necesario (useCases/)
3-crear el end point (routers/)
*/ 

//practica
// POST /koders
// PATCH /koders/:id
// DELETE /koders/:id
// GET /koders/:id
