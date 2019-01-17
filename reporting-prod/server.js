const express = require('express');
const path = require('path');

var fs = require('fs');
var https = require('https');
var http = require('http'); 
var privateKey  = fs.readFileSync('stackcare.key', 'utf8');
var certificate = fs.readFileSync('STAR_stack_care.combined.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};


const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var httpsServer = https.createServer(credentials, app);
var httpServer = http.createServer(app);

httpServer.get('*', function(req, res) {  
  res.redirect('https://portal.stack.care');

  // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
  // res.redirect('https://example.com' + req.url);
})

httpServer.listen(80)
httpsServer.listen(443);