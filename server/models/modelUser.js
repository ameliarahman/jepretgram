const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: {
    type: String,
    unique: true
  },
  password: String,
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'posts'
  }],
})

const User = mongoose.model('users', userSchema)

module.exports = User