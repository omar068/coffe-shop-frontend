import { render, screen, fireEvent } from '@testing-library/react';
import Carrusel from '../Carrusel';
import { Shop } from '../../interfaces/shop.interface';

describe('Carousel Component', () => {
  const mockShops: Shop[] = [
    { id: 1, name: 'Café del Sol', address: 'Calle 123', phone: '123-456-7890' },
    { id: 2, name: 'Café de la Luna', address: 'Avenida 456', phone: '987-654-3210' },
  ];

  const mockUrls = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

  test('should render shop cards when coffe_shops prop is provided', () => {
    render(<Carrusel coffe_shops={mockShops} urls={[]} />);
    expect(screen.getAllByRole('article')).toHaveLength(mockShops.length);
  });

  test('should render images when urls prop is provided', () => {
    render(<Carrusel coffe_shops={[]} urls={mockUrls} />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mockUrls.length);

    images.forEach((image, index) => {
      expect(image).toHaveAttribute('src', mockUrls[index]);
    });
  });

  test('should handle scroll event', () => {
    render(<Carrusel coffe_shops={mockShops} urls={mockUrls} />);

    const carouselContainer = screen.getByRole('list');
    const initialScrollLeft = carouselContainer.scrollLeft;

    fireEvent.wheel(carouselContainer, { deltaY: 100 });
    expect(carouselContainer.scrollLeft).toBeGreaterThan(initialScrollLeft);
  });
});
