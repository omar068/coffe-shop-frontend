import { cookies } from 'next/headers'; // Utilizamos cookies del servidor
import { fetchItemById } from '@/services/apiService';
import ClientComponent from './ClientComponent';

export default async function Page({ params }: { params: { id: string } }) {
  const resolvedParams = await params;

  // Obtén el token de las cookies del servidor
  const cookieStore = cookies();
  const authToken = (await cookieStore).get('authToken');

  // Verifica si el token existe
  if (!authToken) {
    // Opcional: Redirige o lanza un error si el token no está presente
    throw new Error('Token no encontrado. Redirigiendo al login...');
  }

  // Realiza la llamada a la API utilizando el token para autenticación
  const data = await fetchItemById(resolvedParams.id);

  // Pasa los datos al Client Component
  return <ClientComponent data={data} />;
}