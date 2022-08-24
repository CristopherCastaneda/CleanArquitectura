
const express = require("express")
const app = express()
//routers
const routerKoder = require("./routes/koder.route")
const routerMentor = require("./routes/mentor.route")
const routerGeneration = require("./routes/generations.route")
const { populate } = require("./models/mentor.model")

// middleware del json


app.use(express.json())

//middlewares de rutas
app.use("/koders",routerKoder)
app.use("/mentors", routerMentor)
app.use("/generations", routerGeneration)

// Endpoint de home
app.get("/", (request, response )=>{
    response.json({message:"bienvenido a nuestra appi limpia"})
})
// exportar
module.exports = app