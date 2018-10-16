const http = require('http');
const path = require('path');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

const port = 3000

function parseQuery(url) {
  return url.split('/')
}

const requestHandler = (req, res) => {
  if (req.method === 'GET') {
    const mongo_url = 'mongodb://localhost:27017/'

    MongoClient.connect(mongo_url, { useNewUrlParser: true })
      .then(client => {
       const db = client.db('test_notes');
       const collection = db.collection('test_notes');
       collection.find({}).toArray().then(response => {
         console.log(response)
         res.writeHead(200, { 'Content-Type': 'application/json'});
         res.end(JSON.stringify(response))
       });
      }).catch(error => console.error(error));
  } else if (req.method === 'POST') {

  } else if (req.method === 'PUT') {
    //passed
  } else if (req.method === 'DELETE') {
    //passed
  } else {
    //passed
  }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('Something bad happened', err)
  }

  console.log(`Server is listening on ${port}`)
})





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
