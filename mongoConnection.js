export class mongoConnection() {
  constructor(url, database, client) {
    this.url = url;
    this.database = database;
    this.client = client;
  }

  connect(collection, callback) {
    this.client.connect(this.url, { useNewUrlParser: true }).then(client => {
      const db = this.client.db(dbName);
      const collection = db.collection(collection);
      callback(res, collection)
    })
  }
}
