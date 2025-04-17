import axios from 'axios';

// Define la URL base de la API
const BASE_URL = 'http://localhost:4000/auth';

/**
 * Servicio para el login
 * @param {string} username
 * @param {string} password
 * @returns {Promise<Object>} Respuesta del servidor
 */
export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { username, password }); 
    console.log(response.data);
    return response.data; 
  } catch (error) {
    console.error('Error en el login:', error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data || { message: 'Error desconocido' };
    }
    throw { message: 'Error desconocido' };
  }
};

export const register = async (username: string, password: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, { username, password });
      return response.data;
    } catch (error) {
  
      // Verificamos si es un error de Axios
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const data = error.response?.data;
  
        if (status === 400) {
          return { messageError: 'El usuario ya existe. Por favor, utiliza otro nombre.' };
        } else if (status === 500) {
          return { messageError: 'Error del servidor. Intenta más tarde.' };
        } else {
          return { messageError: data?.message || 'Error desconocido.' };
        }
    }
      
      throw { message: 'Error desconocido en el servicio.' };
    }
  };
  
