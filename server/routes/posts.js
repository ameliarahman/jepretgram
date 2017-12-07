var express = require('express');
var router = express.Router();
var post = require('../controllers/posts')
const multer = require('multer')
const upload = multer({ dest: 'public/images/' })

router.get('/', post.findPost)
router.post('/', upload.single('image_url'), post.createPost)
router.get('/:id', post.findPostById)
router.put('/:id', post.updatePost)
router.delete('/:id', post.deletePost)


module.exports = router;
