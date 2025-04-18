// Card.test.js
import { render, screen } from '@testing-library/react';
import Card from '../Card';
import '@testing-library/jest-dom'; // Para usar matchers como .toBeInTheDocument

// Mock de los datos de la tienda
const shopData = {
  name: 'Bar Nim',
  address: 'Calle 123, Bogotá',
  phone: '123456789',
  id: 123,
};

describe('Card component', () => {
  test('should render the shop name, address, and phone correctly', () => {
    render(<Card {...shopData} />);

    // Verifica que el nombre de la tienda esté en el documento
    expect(screen.getByText(shopData.name)).toBeInTheDocument();

    // Verifica que la dirección de la tienda esté en el documento
    expect(screen.getByText(shopData.address)).toBeInTheDocument();

    // Verifica que el teléfono de la tienda esté en el documento
    expect(screen.getByText(shopData.phone)).toBeInTheDocument();
  });

  test('should render "No disponible" if address or phone is not provided', () => {
    // Verifica que "No disponible" se renderiza cuando no hay dirección ni teléfono
    const { rerender } = render(<Card {...{ ...shopData, address: null, phone: null }} />);
  
    // Verifica que "No disponible" se muestra en ambos casos
    const noDisponibleElements = screen.getAllByText('No disponible');
    expect(noDisponibleElements).toHaveLength(2); // Dos veces "No disponible" porque hay 2 campos faltantes
  
    // Vuelve a renderizar sin teléfono
    rerender(<Card {...{ ...shopData, phone: null }} />);
  
    // Verifica que "No disponible" se muestra solo para la dirección
    const noDisponibleAddress = screen.getAllByText('No disponible');
    expect(noDisponibleAddress).toHaveLength(1); // Solo una vez "No disponible" porque solo falta la dirección
  
    // Vuelve a renderizar sin dirección
    rerender(<Card {...{ ...shopData, address: null }} />);
  
    // Verifica que "No disponible" se muestra solo para el teléfono
    const noDisponiblePhone = screen.getAllByText('No disponible');
    expect(noDisponiblePhone).toHaveLength(1); // Solo una vez "No disponible" porque solo falta el teléfono
  });
  

  test('should contain a button that links to the correct details page', () => {
    render(<Card {...shopData} />);

    // Verifica que el botón esté en el documento
    const button = screen.getByRole('link', { name: /Ver mas/i });
    expect(button).toBeInTheDocument();

    // Verifica que el enlace redirige a la URL correcta
    expect(button).toHaveAttribute('href', `/details/${shopData.id}`);
  });

  test('should display the shop image correctly', () => {
    render(<Card {...shopData} />);

    // Verifica que la imagen esté en el documento
    const image = screen.getByAltText('Bar Nim Interior');
    expect(image).toBeInTheDocument();

    // Verifica que la imagen tenga la URL correcta
    expect(image).toHaveAttribute('src', 'https://tienda.cristar.com.co/wp-content/uploads/2024/07/8cef3ee5-nadir_dk_6464-md-1.jpg');
  });
});
