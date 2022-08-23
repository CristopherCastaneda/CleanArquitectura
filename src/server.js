
const express = require("express")
const app = express()
//routers
const routerKoder = require("./routes/koder.route")

// middleware del json


app.use(express.json())

//middlewares de rutas
app.use("/koders",routerKoder)

// Endpoint de home
app.get("/", (request, response )=>{
    response.json({message:"bienvenido a nuestra appi limpia"})
})
// exportar
module.exports = app