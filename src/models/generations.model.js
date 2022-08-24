const mongoose = require("mongoose")

 const generationSchema = new mongoose.Schema({
    name: {
      type: String,
      minlength: 3,
      maxlength: 20,
      required: true
    },
    module: {
      type: String
    },
    startDate: {
      type: String
    },
    endDate: {
      type: String
    },
    mentors:{
        type:
          [
            {
              name: {
                type: String,
                minlength: 3,
                maxlength: 20,
                required: true
              },
              module: {
                type: String
              },
              age:{
                type: Number
              },
              type:{
                type: String,
                enum: ["ProgramLead", "Mentor", "B-Mentor"]
              }
            }
          ]
        }
  })
 
 // Exportando modelo
 module.exports = mongoose.model("generations", generationSchema)