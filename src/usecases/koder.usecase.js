const koder =require("../models/koder.model")

// uso de caso son funciones que van a crear, agendar cita, iniciar secion
// no se tiene acesso al request y al body
const create =(koderData)=>{
    // create koder
    const koder = koder.create(koderData)
    return koder
}
// get koder
//actualizar koder
// eiminar koder

module.exports = {create} //se pueden agregar lo que se puede exportar con una coma

