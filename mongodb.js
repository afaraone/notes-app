const mongoURL = 'mongodb://localhost:27017/';
const MongoClient = require('mongodb').MongoClient;

module.exports.getNotes = res => {
  MongoClient.connect(
    mongoURL,
    { useNewUrlParser: true }
  )
    .then(client => {
      const db = client.db('test-notes');
      const collection = db.collection('notes');
      collection
        .find({})
        .toArray()
        .then(response => {
          //console.log(response);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(response));
        });
    })
    .catch(error => console.error(error));
};
