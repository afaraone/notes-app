const mongoURL = 'mongodb://localhost:27017/';
const MongoClient = require('mongodb').MongoClient;

const connect = (
  res,
  callback,
  dbName = 'MakersBnB',
  dbCollection = 'users'
) => {
  MongoClient.connect(
    mongoURL,
    { useNewUrlParser: true }
  )
    .then(client => {
      const db = client.db(dbName);
      const collection = db.collection(dbCollection);
      callback(res, collection);
    })
    .catch(error => console.error(error));
};

const getNotesFromCollection = (res, collection, data = {}) => {
  collection
    .find(data)
    .toArray()
    .then(response => {
      //console.log(response);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response));
    });
};

module.exports.getNotes = res => {
  connect(
    res,
    getNotesFromCollection
  );
};
