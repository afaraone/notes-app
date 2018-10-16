const http = require('http');
const path = require('path');
const fs = require('fs');

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

  let contentType = mimeTypes[extname] || 'application/octet-stream';

  http.get('http://localhost:4000/test', (res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    response.write("This is a test!");
    res.end();
  })


  fs.readFile(filePath, function(error, content) {
    response.writeHead(200, { 'Content-Type' : contentType });
    response.end(content, 'utf-8');
  })
}).listen(4000);
console.log('Server running at port 4000')
