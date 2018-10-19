import * as mongodb from 'mongodb'

export class mongoConnection {
  constructor(url, mongo = mongodb) {
    this.mongo = mongo
    this.database = process.env.NODE_ENV === 'test' ? 'notes_test' : 'MakersBnB';
    this.mongoClient = new this.mongo.MongoClient(url, { useNewUrlParser: true });
    this.objectId = this.mongo.ObjectId
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
        response.writeHead(200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE',
          'Access-Control-Allow-Headers': '*'
        });
        response.send(JSON.stringify(results));
    })
  }

  read(response, collectionName, id) {
    let data = (id == null || id === "") ? { } : { _id: new this.objectId(id) }
    this.connect(response, collectionName, this.readCallback, data)
  }

  postCallback(response, collection, data) {
    collection
      .insertOne(data, (error, results) => {
        if (error) throw error;
        console.log("1 entry added")
        response.writeHead(201, { 'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Max-Age': 2592000,
          'Content-Type': 'application/json'
        });
        response.end(JSON.stringify(results));
      })
  }

  post(response, collectionName, data) {
    this.connect(response, collectionName, this.postCallback, data)
  }

  putCallback(response, collection, data) {
    collection
      .updateOne(data[1], {$set: data[0]}, (error, results) => {
        if (error) throw error;
        console.log("1 entry updated")
        response.writeHead(204, { 'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Max-Age': 2592000,
          'Content-Type': 'application/json'
        });
        response.end(JSON.stringify(results));
      })
  }

  put(response, collectionName, data) {
    data[1] = { _id: new this.objectId(data[1]) }
    this.connect(response, collectionName, this.putCallback, data)
  }

  deleteCallback(response, collection, data) {
    collection
      .deleteOne(data, (error, results) => {
        if (error) throw error;
        console.log("1 entry deleted")
        response.writeHead(204, { 'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Max-Age': 2592000,
          'Content-Type': 'application/json'
        });
        response.end(JSON.stringify(results));
      })
  }

  delete(response, collectionName, data) {
    data = { _id: new this.objectId(data) }
    console.log(data)
    this.connect(response, collectionName, this.deleteCallback, data)
  }
}
