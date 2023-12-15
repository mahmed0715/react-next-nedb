const Datastore = require('nedb-promises');
let datastore = Datastore.create('data.json');
export default datastore;