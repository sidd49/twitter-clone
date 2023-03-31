const express=require("express");
const router=express.Router();
const tweetController=require('../controller/tweetController');


router.post("/add",tweetController.store);

module.exports = router;