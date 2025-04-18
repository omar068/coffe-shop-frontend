import { fetchItemById } from '@/services/apiService';
import ClientComponent from './ClientComponent';


export default async function Page({ params }: { params: { id: string } }) {
  const resolvedParams = await params;
  const data = await fetchItemById(resolvedParams.id);

  return <ClientComponent data={data} />;
}