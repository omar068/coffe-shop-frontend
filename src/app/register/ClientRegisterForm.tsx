'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '@/services/authService';
import OutLineButton from '../../components/OutLineButton';
import FullButton from '../../components/FullButton';

export default function ClientRegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const response = await register(username, password) as {
            messageError: any;
            message: any
        };
        if (response.messageError) {
            setErrorMessage(response.message || 'El usuario ya existe. Por favor, utiliza otro nombre.');
            setSuccessMessage('');
        } else {
            setSuccessMessage('Registro exitoso. Puedes iniciar sesión ahora.');
            setErrorMessage('');
            setTimeout(() => {
                router.push('/login');
            }, 2000);
        }
    };

    return (
        <div className="w-full">
            {errorMessage && (
                <div className="bg-red-500 text-white text-center py-2 rounded mb-4">
                    {errorMessage}
                </div>
            )}
            {successMessage && <div className='bg-green-500 text-white text-center py-2 rounded mb-4'>{successMessage}</div>}
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
                <div className='mb-6 flex flex-col items-center gap-2'>
                  <FullButton content='Registrarse' type='submit' className='w-full button-reservation' />  
                <OutLineButton bg="bg-[#13132D]" onClick={() => router.push('/login')}>Regresar al login</OutLineButton>
                </div>
            </form>
        </div>
    );
}
