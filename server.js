#!/use/bin/env node
var express = require ('express');

var app = express();

app.get ('/', function (request, response) {
   response.send ('Hello World! From http://h3manth.com');
 });

var port = process.env.PORT || 3000;
app.listen (port, function () {
   console.log ("Listening on" + port);
 });
