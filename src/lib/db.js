//preparamos conexión al base de datos importando mongoose
const mongoose = require('mongoose')

//const DB_USER = process.env.DB_USER
//const DB_PASSWORD = process.env.DB_PASSWORD
//const DB_HOST = process.env.DB_HOST
//const DB_NAME = process.env.DB_NAME

//destructurig
const {
    DB_USER, 
    DB_PASSWORD, 
    DB_HOST, 
    DB_NAME
} = process.env

//estructura de URL con el protocolo de mongoose
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

//preparamos la conexion
function connect() {
    return mongoose.connect(URL)//regresa una promesa
}

//exportamos la conexion
module.exports = connect