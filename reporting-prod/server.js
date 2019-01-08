const express = require('express');
const path = require('path');

var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('stackapis20180917.key', 'utf8');
var certificate = fs.readFileSync('stackapis20180917.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};


const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(80);