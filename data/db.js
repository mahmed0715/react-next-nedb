const Datastore = require('nedb-promises');
let datastore = Datastore.create('/tmp/data.json');
export default datastore;