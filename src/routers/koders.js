const express = require('express')
//importamos el caso de uso
const useCasesKoders = require('../useCases/koders')
//importamos auth
const auth = require('../middlewares/auth')
//instanciamos el router
const router = express.Router()

router.use(auth)

//creamos el metodo GET para obtener el koder
router.get('/', async (request, response) => {
    //manejamos el error
    try{
        //traemos el metodo de use cases
        const allKoders = await useCasesKoders.getAll()
        //response.json con las 3 keys s,c,d
        response.json({
            success: true,
            message: 'All koders',
            data: {
                koders: allKoders
            }
        })
    } catch (error) {
        //mandamos el status 400
        response.status(400)
        //response.json con las 3 keys s,c,e
        response.json({
            success: false,
            message: 'Error at get all koders',
            error: error.message
        })
    }
})

//creamos el metodo POST para crear al koder
router.post('/', async (request, response) => {
    //manejamos el error
    try{
        // realizamos el koder a crear
        const koderToCreate = request.body
        //traemos el metodo de use cases
        const koderCreated = await useCasesKoders.create(koderToCreate)//regresa una promesa
        //response.json con las 3 keys s,c,d
        response.json({
            success: true,
            message: 'Koder Created',
            data: {
                koder: koderCreated
            }
        })
    } catch (error) {
        //mandamos el status 400
        response.status(400)
        //response.json con las 3 keys s,c,e
        response.json({
            success: false,
            message: 'Error at create koder',
            error: error.message
        })
    }
})

//creamos el metodo DELETE para borrar al koder 
router.delete('/:id', async (request, response) => {
    try { 
        const idkoder =  request.params.id
        const deleteKoders = await useCasesKoders.deleteById(idkoder)

         response.json({
             success: true,
             message:'delete koder',
             data: {
                 koder: deleteKoders
                }
         })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error id koder',
            error: error.message
        }) } 
      },

//creamos el metodo patch para actualizar el coder
router.patch('/:id', async (request, response) => {
    try{
    const idKoder = request.params.id
    const dataToUpdate = request.body
    const koders = await useCasesKoders.updateData(idKoder, dataToUpdate, {new: true})
     // Esto es lo que vamos a actualizar, 
    if (!koders) throw new Error("koder not found");
    response.json({
      succes: true,
      data: {
        koders: koders,
      },
    });
  } catch (error) {
    response.status(404);
    response.json({
      succes: false,
      message: error.message,
    })
  }
}), 

//creamos el metodo GET by id para buscar un koder
router.get("/:id", async (request, response) => {
    try {
      const idKoder = request.params.id;
      const koderFound = await useCasesKoders.getById(idKoder);
  
      if (!koderFound) throw new Error("Koder not found");
      response.json({
        success: true,
        message: "koder found",
        data: {
          koder: koderFound,
        },
      });
    } catch (error) {
      response.status(404);
      response.json({
        success: false,
        message: "Koder not found",
        error: error.message,
      });
    }
  }),

//exportamos el router para el server
module.exports = router
