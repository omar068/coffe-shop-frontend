import { transformData } from '@/utils/transformData';
import axios from 'axios';


const api = axios.create({
  baseURL: 'https://api.openbrewerydb.org/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Servicio para obtener un elemento por ID
 */
export async function fetchItemById(id: string) {
  try {
    const response = await api.get(`/breweries/${id}`);
    return transformData(response.data); // Usa tu función de transformación
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error ${error.response?.status}: ${error.response?.data?.message || 'Failed to fetch item by ID'}`);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
}


/**
 * Servicio para obtener todos los elementos
 */
export async function fetchAllItems() {
  try {
    const response = await api.get(`/breweries`, { params: { per_page: 200 } });
    const allData = response.data.map((item: any) => transformData(item));
    const filteredData = response.data.filter((item: any) => item.state === 'California');
    const dataByState = filteredData.map((item: any) => transformData(item));
    return [allData, dataByState];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error ${error.response?.status}: ${error.response?.data?.message || 'Failed to fetch all items'}`);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
}