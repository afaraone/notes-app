const http = require('http');
const mc = require('./mongoConnection');
const port = 3000;

connection = new mc.mongoConnection('mongodb://localhost:27017/')

const requestHandler = (req, res) => {
  if (req.url === '/favicon.ico') {
    return
  }

  res.writeHead(200, {'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE',
    'Access-Control-Allow-Headers': '*'
  })

  collection = req.url.split('/')[1]
  id = req.url.split('/')[2]

  let data = []
  req.on('data', chunk => {
    data.push(chunk)
  })

  if (req.method === 'GET') {
    connection.read(res, collection, id);
  } else if (req.method === 'POST') {
    req.on('end', () => {
      let params = JSON.parse(data)
      connection.post(res, collection, params)
    })
  } else if (req.method === 'PUT') {
    req.on('end', () => {
      let params = JSON.parse(data)
      connection.put(res, collection, [params, id])
    })
  } else if (req.method === 'DELETE') {
    connection.delete(res, collection, id)
  } else if (req.method === 'OPTIONS' ){
    res.end()
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(null));
  }
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log('Something bad happened', err);
  }

  console.log(`Server is listening on ${port}`);
});
