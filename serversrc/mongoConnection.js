import * as mongodb from 'mongodb'

export class mongoConnection {
  constructor(url, database) {
    this.database = database;
    this.mongoClient = new mongodb.MongoClient(url, { useNewUrlParser: true });
    this.objectId = mongodb.ObjectId
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
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(results));
    })
  }

  read(response, collectionName, id) {
    let data = (id == null || id === "") ? { } : { _id: new this.objectId(id) }
    this.connect(response, collectionName, this.readCallback, data)
  }

  post(response, collectionName, data) {
    this.connect(response, collectionName, this.postCallback, data)
  }

  postCallback(response, collection, data) {
    collection
      .insertOne(data, (err, res) => {
        if (err) throw err;
        console.log("1 name added")
      })
  }

  putCallback(response, collection, data) {
    collection
      .updateOne(data[1], {$set: data[0]}, (err, res) => {
        if (err) throw err;
        console.log("1 name added")
      })
  }

  put(response, collectionName, data) {
    data[1] = { _id: new this.objectId(data[1]) }
    console.log(data)
    this.connect(response, collectionName, this.putCallback, data)
  }
}
