
import { render, screen } from '@testing-library/react';
import Card from '../Card';
import '@testing-library/jest-dom'; 

const shopData = {
  name: 'Bar Nim',
  address: 'Calle 123, Bogotá',
  phone: '123456789',
  id: 123,
};

describe('Card component', () => {
  test('should render the shop name, address, and phone correctly', () => {
    render(<Card {...shopData} />);
  
    expect(screen.getByText(shopData.name)).toBeInTheDocument();
    expect(screen.getByText(shopData.address)).toBeInTheDocument();
    expect(screen.getByText(shopData.phone)).toBeInTheDocument();
  });

  test('should render "No disponible" if address or phone is not provided', () => {
    const { rerender } = render(<Card {...{ ...shopData, address: null, phone: null }} />);
  
    const noDisponibleElements = screen.getAllByText('No disponible');
    expect(noDisponibleElements).toHaveLength(2);
    rerender(<Card {...{ ...shopData, phone: null }} />);

    const noDisponibleAddress = screen.getAllByText('No disponible');
    expect(noDisponibleAddress).toHaveLength(1);
    rerender(<Card {...{ ...shopData, address: null }} />);

    const noDisponiblePhone = screen.getAllByText('No disponible');
    expect(noDisponiblePhone).toHaveLength(1); 
  });
  

  test('should contain a button that links to the correct details page', () => {
    render(<Card {...shopData} />);

    const button = screen.getByRole('link', { name: /Ver mas/i });
    expect(button).toBeInTheDocument();

    expect(button).toHaveAttribute('href', `/details/${shopData.id}`);
  });

  test('should display the shop image correctly', () => {
    render(<Card {...shopData} />);

    const image = screen.getByAltText('Bar Nim Interior');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://tienda.cristar.com.co/wp-content/uploads/2024/07/8cef3ee5-nadir_dk_6464-md-1.jpg');
  });
});
