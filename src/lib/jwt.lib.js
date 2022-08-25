const jwt = require ("jsonwebtoken")
const {JWT_SECT_KEY}=process.env
const  sing =(payload={})=>{
    jwt.sing(payload,JWT_SECT_KEY,{expiresIn: "8h"})
}

module.exports= {sing}