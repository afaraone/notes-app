const http = require('http');
const path = require('path');
const fs = require('fs');

const port = 3000

function parseURL(url) {
  
}

const requestHandler = (req, res) => {

  console.log(req.url);

  if (req.method === 'GET') {
    console.log("GET");
    // let fileURL = parseURL(req.url)
    let html = fs.readFileSync('index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);

  } else if (req.method === 'POST') {

  } else if (req.method === 'PUT') {
    //passed
  } else if (req.method === 'DELETE') {
    //passed
  } else {
    //passed
  }
  console.log(req.url)
  res.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('Something bad happened', err)
  }

  console.log(`Server is listening on ${port}`)
})
