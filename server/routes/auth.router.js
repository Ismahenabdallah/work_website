var express = require('express');
const { Login, Register } = require('../controllers/auth.ctr');

var router = express.Router();

/* GET home page. */
router.post('/login', Login)
router.post('/register',  Register)

module.exports = router;
