import Form from "@/components/Form";

import datastore from '@/data/db';
const getData = async (id) => {
  const foundData = await datastore.findOne({_id: id});
  console.log({ foundData });
  return foundData;
}
export default async function Id({ params: { id } }) {
  console.log("Id", id);
  const data = await getData(id);
  console.log({ data })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form _id={id} data={data} />
    </main>
  )
}
