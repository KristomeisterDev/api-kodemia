//importamos jwt
const jwt = require('jsonwebtoken')



//encapsulamos
function sing(payload){
    return jwt.sign(payload, JWT_SECRET, {expiresIn: '1h'})
}
//para validar el token
function verify(token) {
    return jwt.verify(token, JWT_SECRET)
}

exportamos
module.exports = {
    ...jwt,
    sing, 
    verify
}