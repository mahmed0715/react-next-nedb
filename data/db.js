const Datastore = require('nedb-promises');
let datastore = Datastore.create('data.db');
export default datastore;