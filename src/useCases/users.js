//importamos el modelo
const User = required('../models/users')
//importamos el modulo que creamos de bcrypt
const bcrypt = required('../lib/bcrypt')
//importamos jwt
const jwt = require('../lib/jwt')

function getAll() {
    return User.find({})
}

//singup
async function singUp (dataUser) {
    //recibe el objeto con el name, email, password
    // validar que no exista un usuario con el mismo mail
    const {email, password, name} = dataUser
    //buscamos en la BD con el metodo findOne que solo trae una coincidencia
    const userFound = await User.findOne({email: email})//devuelve el objeto usuario {name, password, email}
    //si no lo encuentra devuelve un undefined
    //validar si existe un usuario 
    if(userFound) throw new Error('User already exists')
    //encriptar mi contraseña
    const passwordEncrypted = await bycrypt.hash(password)
    //retornamos el password cifrado
    return User.create({name, email, password: passwordEncrypted})
}

//login
//recibe email y password
function login (email, password) {
    //buscar que no exista el mail en bd
    const userFound = await User.findOne({email})
    //validar si encontro un usuario
    if(!userFound) throw new Error('Invalid Credentials') 
    //metodo compare de bycript para el password encryptado
    const isValidPassword = await bcrypt.compare(password, userFound.password)
    //validar si el password es valido     
    if(!isValidPassword) throw new Error('Invalid Credentials')
    //regresar el token
    return jwt.sign({id: userFound._id})

}


//exportamos los casos de uso para los routers
module.exports = {
    getAll,
    singUp,
    login
}