var bcrypt = require('bcrypt');

module.exports = function (plainPassword, hash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plainPassword, hash, function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}