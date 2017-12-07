const User = require('../models/modelUser')
const Encrypt = require('../helpers/encrypt')
const Decrypt = require('../helpers/bcrypt')

const signUp = (req, res) => {
  Encrypt(req.body.password).then((newPassword) => {
    User.create({
      name : req.body.name,
      username : req.body.username,
      password: newPassword
    })
  })
}

