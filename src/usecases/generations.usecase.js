const Generations = require("../models/generations.model")

// Crear generations
const createGeneration = (generationData) => {
  const generation = Generations.create(generationData)
  return generation
}

// Retrieve Mentor
const getGeneration = (id) => {
  const generation = Generations.findById(id)
  return generation
}

// All generations
const allGeneration = (filters) => {
  const generation = Generations.find(filters)
  return generation
}

// Actualizar un generation
const updateGeneration = (id, generationData) => {
  // id
  // objetoupdate
  // options
  const generation = Generations.findByIdAndUpdate(id, generationData, { returnDocument: "after" })
  return generation
}

// Eliminar mentor
const removeGeneration = (id) => {
  const generation = Generations.findByIdAndDelete(id)
  return generation
}


module.exports = {
  createGeneration,
  getGeneration,
  allGeneration,
  updateGeneration,
  removeGeneration
}