const User = require('../models/modelUser')
const Encrypt = require('../helpers/encrypt')
const Decrypt = require('../helpers/decrypt')
const jwt = require('jsonwebtoken')

const signUp = (req, res) => {
  Encrypt(req.body.password).then((newPassword) => {
    User.create({
      name: req.body.name,
      username: req.body.username,
      password: newPassword
    })
    .then((dataUser) => {
      res.send(dataUser)
    })
    .catch((reason) => {
      res.send(reason)
    })
  })
}

const signIn = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .then((dataUser) => {
      Decrypt(req.body.password, dataUser.password)
        .then((result) => {
          if (!result) {
            res.send("Not found")
          } else {
            const payload = {
              username: dataUser.username,
              name: dataUser.name,
              isLogin: true
            }
            jwt.sign(payload, "semangatlivecodesampetitikdarahpenghabisan", function (err, token) {
              if (err) {
                throw err
              } else {
                res.send({
                  message: "Berhasil",
                  data: payload,
                  token: token
                })
              }
            })
          }
        })
        .catch((reason) => {
          res.send(reason)
        })
    })
    .catch((reason) => {
      res.send(reason)
    })
}

const getDataUser = (req, res) => {
  User.find()
  .populate('posts')
    .then((dataUsers) => {
      res.send(dataUsers)
    })
    .catch((reason) => {
      res.send(reason)
    })
}

module.exports = {
  signUp,
  signIn,
  getDataUser
}