var express = require('express');
const { share, getAllJobs, apply } = require('../controllers/job.ctr');
const { verifyToken } = require('../middleware/grade');
var router = express.Router();

router.post('/pub' , verifyToken , share)
router.put('/apply' , verifyToken , apply)
router.get('/getalljobs', getAllJobs)

module.exports = router;