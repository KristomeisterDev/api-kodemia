const Koder = require('../models/koders')

//endpoint -> caso de uso -> modelos(entities)

function getAll() {
    Koder.find({}) //una promesa
}

module.exports = {
    getAll
}