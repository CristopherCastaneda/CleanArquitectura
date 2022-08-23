// Enpoints
const express = require("express")
const app = require("../server")

const { create } = require("../usecases/koder.usecase")

const router = express.Router()

// Enpoint de create

router.post("/", async (request, response) => {
    //recibir el request
    //response
    try {
        const { body } = request
        const koder = await create(body)
        response.status(201)
        response.json({
            success: true,
            data: {
                koder
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
    }
})

module.exports=router
