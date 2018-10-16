const http = require('http');
const path = require('path');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

const port = 3000


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
    // let query = parseQuery(req.url)
    const mongo_url = 'mongodb://localhost:27017/'
    // console.log(req);
    //
    // MongoClient.connect(mongo_url, { useNewUrlParser: true }, function(err, db) {
    //     if (err) { return console.log(err) }
    //
    //     const collection = db.collection('users');
    //     collection.find({},(err,result) => {
    //         if(err){
    //             console.log(err);
    //         }
    //         console.log(result);
    //     });
    // });
    // MongoClient.connect(mongo_url, function(err, db) {
    //     if (err) throw err;
    //     db.collection("users").find({}).toArray(function(err, result) {
    //         if (err) throw err;
    //         var query = result;
    //         db.close();
    //         res.write(query);
    //         res.end();
    //     });
    // });

    MongoClient.connect(mongo_url, { useNewUrlParser: true })
      .then(client => {
       const db = client.db('testDatabase');
       const collection = db.collection('users');
       collection.find({}).toArray().then(response => {
         console.log(response)
       })
      }).catch(error => console.error(error));
  } else if (req.method === 'POST') {

  } else if (req.method === 'PUT') {
    //passed
  } else if (req.method === 'DELETE') {
    //passed
  } else {
    //passed
  }
  // console.log(req.url)
  // res.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('Something bad happened', err)
  }

  console.log(`Server is listening on ${port}`)
})
