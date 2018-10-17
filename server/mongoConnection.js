"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mongoConnection = void 0;

var mongodb = _interopRequireWildcard(require("mongodb"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class mongoConnection {
  constructor(url, database) {
    this.database = database;
    this.mongoClient = new mongodb.MongoClient(url, {
      useNewUrlParser: true
    });
    this.objectId = mongodb.ObjectId;
  }

  connect(response, collectionName, callback, data) {
    this.mongoClient.connect().then(client => {
      const collection = client.db(this.database).collection(collectionName);
      callback(response, collection, data);
    }).catch(error => console.error(error));
  }

  readCallback(response, collection, data) {
    collection.find(data).toArray().then(results => {
      response.writeHead(200, {
        'Content-Type': 'application/json'
      });
      response.end(JSON.stringify(results));
    });
  }

  read(response, collectionName, id) {
    let data = id == null || id === "" ? {} : {
      _id: new this.objectId(id)
    };
    this.connect(response, collectionName, this.readCallback, data);
  }

  post(response, collectionName, data) {
    this.connect(response, collectionName, this.postCallback, data);
  }

  postCallback(response, collection, data) {
    collection.insertOne(data, (err, res) => {
      if (err) throw err;
      console.log("1 name added");
    });
  }

  putCallback(response, collection, data) {
    collection.updateOne(data[1], {
      $set: data[0]
    }, (err, res) => {
      if (err) throw err;
      console.log("1 name added");
    });
  }

  put(response, collectionName, data) {
    data[1] = {
      _id: new this.objectId(data[1])
    };
    console.log(data);
    this.connect(response, collectionName, this.putCallback, data);
  }

}

exports.mongoConnection = mongoConnection;