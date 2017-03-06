//server.js
var express = require('express');
var app = express();
var lyrics = require('./lyrics');
//makes the directory "public" available to the module.
app.use(express.static(__dirname + '/public'));

// respond with "Hello World!" on the homepage
app.get('/lyrics', function (req, res){
  res.send(lyrics);
});


var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
