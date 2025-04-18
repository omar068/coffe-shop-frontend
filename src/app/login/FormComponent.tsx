'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/services/authService';
import Cookies from 'js-cookie';
import OutLineButton from '../../components/OutLineButton';
import FullButton from '../../components/FullButton';


export default function FormComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleError = (error: any) => {
    console.error('Error en el inicio de sesión:', error);
    if (error?.response?.status === 401) {
      setErrorMessage(error?.response?.data?.message || 'Credenciales inválidas.');
    } else {
      setErrorMessage('Error inesperado. Intenta nuevamente.');
    }
  };

  const handleLoginSuccess = (token: string) => {
    Cookies.set('authToken', token, { expires: 1 });
    router.push('/');
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await login(username, password) as { message?: string; access_token?: string };

      if (response.access_token) {
        handleLoginSuccess(response.access_token);
      } else {
        setErrorMessage(response.message || 'Credenciales incorrectas. Intenta nuevamente.');
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="w-full">
      {errorMessage && (
        <div className="bg-red-500 text-white text-center py-2 rounded mb-4">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-[16px] mb-2">
            Usuario
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-[10px] border border-[#3540E8] rounded-[8px] bg-[#13132D] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3540E8]"
            placeholder="Ingresa tu usuario"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-[16px] mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-[10px] border border-[#3540E8] rounded-[8px] bg-[#13132D] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3540E8]"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div className='mb-6 flex flex-col items-center gap-4'>
          <FullButton content='Iniciar Sesión' type='submit' className='w-full button-reservation' />

          <OutLineButton bg="bg-[#13132D]" onClick={() => router.push('/register')}>Crea una cuenta</OutLineButton>
        </div>


      </form>
    </div>
  );
}
