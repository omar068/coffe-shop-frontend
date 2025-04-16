import { Shop } from '../app/interfaces/shop.interface';

export function transformData(data: any) {
  return {
    id: data.id,
    name: data.name || 'No disponible',
    address: data.address_1 || 'No disponible',
    phone: data.phone || 'No disponible',
  };
}
