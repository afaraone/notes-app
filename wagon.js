const http = require('http');
const path = require('path');
const fs = require('fs');
const mongodb = require('mongodb');

const port = 3000

var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017/test_notes')

function parseURL(url, ext = '.html') {
  let dottedUrl = '.' + url
  if (dottedUrl === './') {
    dottedUrl += 'index'
  };
  return dottedUrl += ext
}

function parseQuery(url) {
  return url.split('/')
}

const requestHandler = (req, res) => {

  console.log(req.url);

  if (req.method === 'GET') {
    console.log("GET");
    let query = parseQuery(req.url)
    dbConn.then(function(db) {
      // let collection = db.collection(query[0])
      let results = collection.find()
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(results);
    })


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
