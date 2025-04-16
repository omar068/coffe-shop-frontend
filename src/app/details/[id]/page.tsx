import { fetchItemById } from '@/services/apiService';
import ClientComponent from './ClientComponent';

export default async function Page({ params }: { params: { id: string } }) {
  const resolvedParams = await params;
  // Realiza la llamada a la API en el Server Component
  const data = await fetchItemById(resolvedParams.id);

  // Pasa los datos al Client Component
  return <ClientComponent data={data} />;
}
