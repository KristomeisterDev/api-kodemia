//importamos el modelo
const Koder = require('../models/koders')

//endpoint (routers) -> caso de uso (acciones(funciones)) -> modelos(entities)

//funcion para regresar a los koders
function getAll() {
    //metodo find para buscar el objeto
    return Koder.find({}) //una promesa
}
//funcion para crear a los koders y la información a guardar
function create(dataKoder) {
    //crear un koder en la BD destructurandolo
    const {name,lastname, age, gender} = dataKoder
    //metodo create para crear al koder
    return Koder.create({name, lastName, age, gender})

}

function deleteById(idkoder) {
    return Koder.findByIdAndDelete(idkoder)
}

function updateData(idKoder, dataToUpdate) {
    return Koder.findByIdAndUpdate(idKoder, dataToUpdate)
}

function getById(idKoder) {
    return Koder.findById(idKoder);
  }

//exportamos las acciones de los caso de uso
//en un objeto para exportar mas de uno
module.exports = {
    getAll,
    create,
    deleteById,
    updateData,
    getById
}