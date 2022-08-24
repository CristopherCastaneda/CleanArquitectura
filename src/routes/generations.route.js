const express = require("express")
const { 
    createGeneration,
    getGeneration,
    allGeneration,
    updateGeneration,
    removeGeneration
    } = require("../usecases/generations.usecase")
  
  const router = express.Router()
  
  // Endpoints
  
  router.post("/", async (request, response) => {
  
    const { body } = request
    try {
      const generation = await createGeneration(body)
      response.status(201)
      response.json({
        success: true,
        data: {
          generation
        }
      })
    } catch(error) {
      response.status(400)
      response.json({
        success: false,
        message: error.message
      })
    }
  })
  
  // Path param
  // Arquitecture rest -> /recursos/identificador
  // identificador
  router.get("/:id", async (request, response) => {
    try {
      // Path params
      const { params } = request
      const generation = await getGeneration(params.id) 
      // Si no ponemos status -> 200
      response.json({
        success: true,
        data: {
          generation
        }
      })
    }catch(error) {
      response.status(400)
      response.json({
        success: false,
        message: error.message
      })
    }
  })
  
  // Query params
  // ?parametro=valor&otroparametro=valore&otroparamtrx2=valor
  router.get("/", async (request, response) => {
    try{
      const { query } = request
      // {}
      // { name: Alfredo }
      const generation = await allGeneration(query)
      response.json({
        success: true,
        data: {
          generation
        }
      })
    }catch(error) {
      response.status(400)
      response.json({
        success: false,
        message: error.message
      })
    }
  })
  
  router.patch("/:id", async (request, response) => {
    try{
      const { params, body } = request
      const generation = await updateGeneration(params.id, body)
  
      response.json({
        success: true,
        data: {
          generation
        }
      })
  
    }catch(error) {
      response.status(400)
      response.json({
        success: false,
        message: error.message
      })
    }
  })
  
  router.delete("/:id", async (request, response) => {
    try{
      const { params } = request
      const generation = await removeGeneration(params.id)
      response.json({
        success: true,
      })
  
    }catch(error){
      response.status(400)
      response.json({
        success: false,
        message: error.message
      })
    }
  })
  module.exports = router

