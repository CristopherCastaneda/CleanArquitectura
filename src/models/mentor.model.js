/**
 * koder.model
 * Schema de mongoose
 * Modelo
 */

 const mongoose = require("mongoose")

 const mentorSchema = new mongoose.Schema({
    name: {
      type: String,
      minlength: 3,
      maxlength: 20,
      required: true
    },
    module: {
      type: String
    },
    team: {
      type: String
    },
    generation: {
      type: String
    },
    age: {
      type: Number
    },
    sex: {
      type: String,
      enum: ["f", "m", "o"]
    },
    type: {
      type: String,
      enum: ["ProgramLead", "Mentor", "B-Mentor"]
    }
  })
 
 // Exportando modelo
 module.exports = mongoose.model("mentors", mentorSchema)
