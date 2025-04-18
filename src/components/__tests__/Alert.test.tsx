import { render, screen } from '@testing-library/react';
import Alert from '../Alert';  // Ajusta la ruta según la ubicación de tu componente
import '@testing-library/jest-dom'; // Importa jest-dom para las aserciones
import React from 'react';

describe('Alert component', () => {
    test('renders the alert correctly', () => {
        render(<Alert />);

        // Verifica si el ícono de la alerta está en el documento
        const alertIcon = screen.getByAltText("Alert log");
        expect(alertIcon).toBeInTheDocument();  // Verifica que el icono esté presente

        // Verifica que el texto "Happy Hour" esté en el documento
        const title = screen.getByText('Happy Hour');
        expect(title).toBeInTheDocument();  // Verifica que el título esté presente

        // Verifica que el texto "15:00 - 17:00 hrs MEX" esté en el documento
        const time = screen.getByText('15:00 - 17:00 hrs MEX');
        expect(time).toBeInTheDocument();  // Verifica que la hora esté presente
    });
});