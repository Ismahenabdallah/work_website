var express = require('express');
const { verifyToken } = require('../middleware/grade');
var router = express.Router();
const {UpdateProfil, getProfil, getAllUsers} = require('../controllers/user.ctr')

/* GET users listing. */
router.get('/getprofil' , verifyToken, getProfil)
router.patch('/updateprofil' , verifyToken, UpdateProfil)
router.get('/all',verifyToken,getAllUsers)

module.exports = router;
