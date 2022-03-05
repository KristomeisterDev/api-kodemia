const jwt = require('../lib/jwt')
const { response } = require('../server')

function auth(req, res, next) {
    try{
        //obtenemos el token
        const {authorization: token} = request.headers
        //sobreescribimos el objeto
        console.log('token: ', token)
        //validamos el token
        const isValidToken = jwt.verify(token)//nos regresa el objeto payload

        console.log('isValidToken: ', isValidToken)
        //validamos que sea valido el token
        if(!isValidToken) throw new Error('Not Authorized')
        request.userCurrent = isValidToken.id
        next()

    }catch(error){
        //status 401 para no authorizado
        response.status(401)
        response.json({
            success: false,
            message: 'Not Authorized',
            error: error.message
        })
    }
}

module.exports = auth