const User = require("../models/user.model")
const bcrypt = require("bcrypt")
// Crear un usuario
const createUser = async (userData) => {
  const hasdPasword = await bcrypt.hash(userData.password,10)
  const user = User.create({...userData, password: hasdPasword})
  return user
}


module.exports = {
  createUser
}