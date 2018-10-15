let http = require('http')
let path = require('path')
let fs = require('fs');


http.createServer(function(request, response) {
  console.log('request', request.url);

  let filePath = '.' + request.url
  if (filePath == './') {
    filePath = './index.html'
  }

  let extname = String(path.extname(filePath)).toLowerCase();


  let mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json'
  }

  var contentType = mimeTypes[extname] || 'application/octet-stream';




}).listen(4000);
console.log('Server running at port 4000')
