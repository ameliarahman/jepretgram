const Post = require('../models/modelPost')
const User = require('../models/modelUser')

const createPost = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .then((dataUser) => {
      let post = new Post({
        caption: req.body.caption,
        image_url: req.file.filename,
        likes: req.body.likes,
        username: req.body.username
      })
      post.save(function (err) {
        dataUser.posts.push(post)
        dataUser.save(function () {
          res.send(dataUser)
        })
      })
    })
    .catch((reason) => {
      res.send(reason)
    })
}

const findPost = (req, res) => {
  Post.find()
    .then((dataPost) => {
      res.send(dataPost)
    })
    .catch((reason) => {
      res.send(reason)
    })
}

const findPostById = (req, res) => {
  Post.findById(req.params.id)
    .then((dataPost) => {
      res.send(dataPost)
    })
    .catch((reason) => {
      res.send(reason)
    })
}

const updatePost = (req, res) => {
  Post.findById(req.params.id)
    .then((dataPost) => {
      dataPost.caption = req.body.caption
      dataPost.image_url = dataPost.image_url
      dataPost.likes = req.body.likes

      dataPost.save()
        .then((newData) => {
          res.send(newData)
        })
        .catch((reason) => {
          res.send(reason)
        })
    })
    .catch((reason) => {
      res.send(reason)
    })
}

const deletePost = (req, res) => {
  Post.findByIdAndRemove(req.params.id)
    .then((dataPost) => {
      res.send(dataPost)
    })
    .catch((reason) => {
      res.send(reason)
    })
}


module.exports = {
  createPost,
  findPost,
  findPostById,
  updatePost,
  deletePost
}