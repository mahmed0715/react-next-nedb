
const Datastore = require('nedb-promises');
let datastore = Datastore.create('/tmp/data.json');
export async function getALlData() {
    const data = await datastore.find({})
    console.log({ data });
    return data;
}
getALlData();
export default datastore;