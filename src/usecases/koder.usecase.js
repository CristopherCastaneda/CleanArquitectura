const Koder = require("../models/koder.model")

// uso de caso son funciones que van a crear, agendar cita, iniciar secion
// no se tiene acesso al request y al body


// Funciones
// Handlers

// 1- Uso de caso -> Crear un koder
const create = (koderData) => {
  // Crear un koder
  const koder = Koder.create(koderData)
  return koder
}

// Get Koder
// Actualizar Koder
// Eliminar Koder

module.exports = { create }//se pueden agregar lo que se puede exportar con una coma