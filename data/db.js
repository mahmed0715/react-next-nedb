
const Datastore = require('nedb-promises');
var os = require('os')
var path = require('path')
var tmp = os.tmpdir()
var pathOfDatabase = path.normalize(`${tmp}/data.db`)
let datastore = await Datastore.create({ filename: pathOfDatabase, autoload: true });
export async function getALlData() {
    const data = await datastore.find({})
    console.log({ data });
    return data;
}
// debug only
getALlData();
export default datastore;