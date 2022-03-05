//importamos express
const express = require('express')
//importamos el caso de uso
const users = require('../useCases/users')
//generamos el router
const router = express.Router()

//creamos el endpoint POST para recibir información
router.post('/signup', async (request, response) => {
    try{
        const userData = request.body
        //llamamos el caso de uso
        const userCreated = await users.singup(userData)

        response.json({
            success: true,
            message: 'User Created',
            data: {
               user: userCreated 
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Could not register',
            error: error.message
        })
    }
})

//login
router.post('/login', async (request, response) => {
    //manejamos el error
    try{
        //deestructuramos el email y password
        const {email, password} = request.body
        //mandamos el email y password
        const token = await users.login(email, password)

        response.json({
            success: true,
            message: 'User Logged In',
            data: {
               token 
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Could not register user',
            error: error.message
        })
    }
})


module.exports = router