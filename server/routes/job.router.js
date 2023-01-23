var express = require('express');
const { share } = require('../controllers/job.ctr');
const { verifyToken } = require('../middleware/grade');
var router = express.Router();

router.post('/pub' , verifyToken , share)


module.exports = router;