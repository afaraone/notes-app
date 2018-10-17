import * as mongodb from 'mongodb'

export class mongoConnection {
  constructor(url, database) {
    this.database = database;
    this.mongoClient = new mongodb.MongoClient(url, { useNewUrlParser: true });
    this.timesCalled = 0;
  }

  connect(response, collectionName, callback, data) {
    this.mongoClient.connect()
      .then( client => {
        const collection = client.db(this.database).collection(collectionName);
        callback(response, collection, data)
      })
      .catch(error => console.error(error));
  }

  readCallback(response, collection, data) {
    collection
      .find(data)
      .toArray()
      .then( results => {
        // console.log(results)
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(results));
    })
  }

  read(response, collectionName, data) {
    this.connect(response, collectionName, this.readCallback, data)
    this.timesCalled += 1;
    console.log(this.timesCalled)
  }
}
