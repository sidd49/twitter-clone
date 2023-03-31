const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
tweet : String,
email : String,
userHandle : String,
isLiked : Boolean


});

module.exports = mongoose.model('Tweet',TweetSchema);