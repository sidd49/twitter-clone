var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const tweetRouter=require('./routes/tweet');
const findTweetRouter=require('./routes/findTweet');
var app = express();


mongoose.connect('mongodb://127.0.0.1:27017/twitter')
  .then(() => console.log('Connected to Database!'));
//mongoose.set('strictQuery', false);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tweet',tweetRouter);
app.use('/tweet',findTweetRouter);

module.exports = app;
