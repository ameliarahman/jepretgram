var express = require('express');
var router = express.Router();
var user = require('../controllers/users')

router.get('/', user.getDataUser)
router.post('/signin', user.signIn)
router.post('/signup', user.signUp)


module.exports = router;
