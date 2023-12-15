import Form from "@/components/Form";

import datastore from '@/data/db';
import getSectors from "@/data/sectors";
const getData = async (id) => {
  const count = await datastore.count();
  console.log('Count of the input data:', { count })
  const foundData = await datastore.findOne({ _id: id });
  console.log({ foundData });
  return foundData;
}
export default async function Id({ params: { id } }) {
  console.log("Id", id);
  const data = await getData(id);
  console.log({ data })
  const options = await getSectors();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {/* <div className="flex justify-between"> */}
       <a className="inline-flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-start text-left items-start" href="/">Go back</a>
     {/* </div> */}
      <Form _id={id} data={data} options={options} />
    </main>
  )
}
