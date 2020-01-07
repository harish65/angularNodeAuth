var express = require('express');
require("./connection");
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt =  require('bcrypt');
const User = require('./Users/user')
const CryptoJS = require("crypto-js");

var app = express();
app.use(bodyParser());
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.use(function(req, res, next) {

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', "access-control-allow-origin, origin,accept, X-Requested-With, content-type, Access-Control-Request-Method, Access-Control-Request-Headers");

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.use(User)
//app.use(bcrypt);
app.use(cors());
//console.log(CryptoJS.AES.decrypt('MESSAGE','sh26'))
// var ciphertext = CryptoJS.MD5("test").toString();
// var ciphertext2 = CryptoJS.MD5("test").toString();



// console.log(ciphertext);
// console.log(ciphertext2);




app.listen(3003, function () {
  
  console.log('Example app listening on port3003!');
});
