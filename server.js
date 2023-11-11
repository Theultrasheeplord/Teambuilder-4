const express = require('express');
const app = express();
var http = require('http');
var fs = require('fs');
const port = 8080

var path = require('path');

//Serve webpage


app.use(express.static(path.join(__dirname, 'public')));

app.listen(port);
console.log('listening on port 8080');