import { transformData } from "@/utils/transformData";

export async function fetchItemById(id: string) {
    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Agrega encabezados adicionales aquí si es necesario (por ejemplo, Authorization)
      },
      cache: 'no-store',
    });
  
    if (!response.ok) {
      throw new Error(`Error ${response.status}: Failed to fetch item with ID ${id} - ${response.statusText}`);
    }
    
  
    const data = await response.json();
    const dataClean = transformData(data);
    return dataClean;
  }

  export async function fetchItemByState(id: string) {
    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_state=California`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Agrega encabezados adicionales aquí si es necesario (por ejemplo, Authorization)
      },
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch item with ID ${id}: ${response.statusText}`);
    }
  
    const data = await response.json();
    return data.map((item: any) =>({ id: item.id, name: item.name, address: item.address_1, phone: item.phone  }));
  }
  
  export async function fetchAllItems() {
    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?per_page=200`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch items: ${response.statusText}`);
    }
  
    const data = await response.json();
    const allData = data.map((item: any) => transformData(item));
    const filteredData = data.filter((item: any) => item.state === "California");
    const dataByState = filteredData.map((item: any) => transformData(item));
    return [allData, dataByState];
  }