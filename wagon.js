const http = require('http');
const mc = require('./server/mongoConnection');
const port = 3000;

connection = new mc.mongoConnection('mongodb://localhost:27017/', 'MakersBnB')


const requestHandler = (req, res) => {
  if (req.url === '/favicon.ico') {
    return
  }

  if (req.method === 'GET') {
    // collection = req.url.split('/')[1]
    // id = req.url.split('/')[2]
    // data = id == null ? { _id: 'this is called twice' } : { _id: id }
    // data = {}
    connection.read(res, 'users', {});
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
