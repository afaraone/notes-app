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
    this.timesCalled = 0;
  }

  connect(response, collectionName, callback, data) {
    this.mongoClient.connect().then(client => {
      const collection = client.db(this.database).collection(collectionName);
      callback(response, collection, data);
    }).catch(error => console.error(error));
  }

  readCallback(response, collection, data) {
    collection.find(data).toArray().then(results => {
      // console.log(results)
      response.writeHead(200, {
        'Content-Type': 'application/json'
      });
      response.end(JSON.stringify(results));
    });
  }

  read(response, collectionName, data) {
    this.connect(response, collectionName, this.readCallback, data);
    this.timesCalled += 1;
    console.log(this.timesCalled);
  }

}

exports.mongoConnection = mongoConnection;