//importamos mongoose
const mongoose = require('mongoose')
//creamos el esquema donde almacenamos las colecciones
const useSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 30
    },
    email: {
        type: String,
        required: true,
        match: /.+@.+\..+/
    },
    password: {
        type: String,
        required: true,
    }
})
//regex o expresion regular -> para validar textos (regex101.com, ihateregex.io)

//generamos el modelo, recibiendo la coleccion y el esquema
const model = mongoose.model('users', useSchema)
//exportamos el modelo para los usecases
module.exports = model
