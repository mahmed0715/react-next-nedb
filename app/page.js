import Form from "@/components/Form";
import { getALlData } from "@/data/db";
import getSectors from '@/data/sectors';
export default async function Home() {
  const options = await getSectors();
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form options={options} />
    </main>
  )
}
