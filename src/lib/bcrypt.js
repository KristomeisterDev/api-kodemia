//importamos bcrypt
const bcrypt = require('bcrypt')

const saltRounds = 10
//generamos funcion hash
function hash (plainText) {
    //traemos el metodo hash
    return bcrypt.hash(plainText, saltRounds) //nos retorna la promesa

}

//exportamos toda la libreria bcrypt y la funcion hash sobreescrita
module.exports = {
    ...bcrypt,
    hash: myHash
}

//spread operator sirve para propagar un objeto iterable

