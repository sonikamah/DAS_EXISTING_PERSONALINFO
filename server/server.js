// import Express from 'express';
var express = require("express");
var path = require("path");
var mongoose = require('mongoose');
var fs = require('fs');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var session = require('express-session');
// var RedisStore = require('connect-redis')(express);


var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

// Connection
mongoose.connect('mongodb://localhost/DAS_MOCK_DATA');
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + 'mongodb://127.0.0.1:27017/DAS_MOCK_DATA');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});


var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

// for connect-redis
//   app.use(express.query())
//   app.use(express.cookieParser("mysecret"))
//   app.use(express.session({
//     key: 'app.sess',
//     store: new RedisStore(),
//     secret: 'secret'
//   }));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// // the authCheck middleware
// app.use(function (req, res, next) {
//   console.log("auth middleware called.");
  
//   // If already logged in.
//   if (req.session.userName) {
//     console.log(req.session.userName + " has logged in.");
//     return next();
//   }
  
//   // If not logged in yet and userId NOT exists in params.
//   if (!req.body.userName) {
//     console.log("Anonymous user.");
//     return res.render('login');
//   }
//   // If not logged in yet and userId exists in params.
//   else {
//     if (checkAuth(req)) {
//       console.log(req.body.userName + " login successful.");
//       req.session.userName = req.body.userName;
//       console.log("userName:"+req.session.userName);
//       return next();
//     } else {
//       console.log("login failed.");
//       return res.render('login', {
//         error: "invalid userId/password."
//       });
//     }
//   }
// });


// /**
//  * auth function
//  * if userId/password is valid, return true.
//  */
// checkAuth = function (req) {
//   if (req.body.userName == 'sonika' && 
//       req.body.password == 'sonika') {
//     return true;
//   } else {
//     return false;
//   }
// };

app.get('/', function (req, res) {
  res.send('Hello World!')
});

var controllerObj;
fs.readdir(__dirname+"/controllers",function(err, files){
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file){
      console.log( "Reading a File - "+ file );
      controllerObj = require(__dirname +'/controllers/' + file);
      controllerObj.controller(app);
   });
});

app.listen(7777, function () {
  console.log("Started listening on port", 7777);
})