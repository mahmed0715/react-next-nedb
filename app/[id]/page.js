import Form from "@/component/Form";

import datastore from '@data/db';
const getData = async (id) => {
  return await datastore.findOne(id)
}
export default async function Id({ params: { id } }) {
  console.log("Id", id);
  const data = await getData(params.id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form id={id} data={data} />
    </main>
  )
}
