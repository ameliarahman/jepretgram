const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const postSchema = new Schema({
  caption: String,
  image_url: String,
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'users'
  }],
})

const Post = mongoose.model('posts', postSchema)

module.exports = Post