const express= require('express');
const tweetController = require('../controller/tweetController');
const router=express.Router();

router.get("/display/:userHandle",tweetController.display);

module.exports = router;