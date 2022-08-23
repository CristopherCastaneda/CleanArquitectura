// levantar servidor
// conecta con bd
//logica de ruteo
require("dotenv").config()
const mongoose = require("mongoose")
const app = require("./src/server")

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
}=process.env

const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}${DB_NAME}`
const URI =
    mongoose.connect(URL)
        .then(() => {
            console.log("Connect to our database...")
            app.listen(8080, () => {
                console.log("servidor levantado")
            })
        })
        .catch((error) => {
            console.log("error:", error)
        })

