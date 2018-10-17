const http = require('http');
const mongoConnection = require('./mongoConnection.js');
const port = 3000;

connection = new
const requestHandler = (req, res) => {
  if (req.method === 'GET') {
    mongodb.getNotes(res);
  } else if (req.method === 'POST') {
    //passed
  } else if (req.method === 'PUT') {
    //passed
  } else if (req.method === 'DELETE') {
    //passed
  } else {
    //passed
  }
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log('Something bad happened', err);
  }

  console.log(`Server is listening on ${port}`);
});
