import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from '../Carrusel'; // Ajusta la ruta si es necesario
import { Shop } from '../../interfaces/shop.interface'; // Ajusta la ruta si es necesario

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
    render(<Carousel coffe_shops={mockShops} urls={[]} />);

    // Verifica que el número correcto de elementos Card se renderiza
    expect(screen.getAllByRole('article')).toHaveLength(mockShops.length);
  });

  test('should render images when urls prop is provided', () => {
    render(<Carousel coffe_shops={[]} urls={mockUrls} />);

    // Verifica que el número correcto de imágenes se renderiza
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mockUrls.length);

    // Verifica que las imágenes tienen la URL correcta
    images.forEach((image, index) => {
      expect(image).toHaveAttribute('src', mockUrls[index]);
    });
  });

  test('should handle scroll event', () => {
    render(<Carousel coffe_shops={mockShops} urls={mockUrls} />);

    const carouselContainer = screen.getByRole('list'); // Verifica el contenedor del carrusel (es un contenedor de tipo lista)
    const initialScrollLeft = carouselContainer.scrollLeft;

    // Simula un evento de desplazamiento con el ratón
    fireEvent.wheel(carouselContainer, { deltaY: 100 });

    // Verifica que el scrollLeft ha cambiado, indicando que el desplazamiento ocurrió
    expect(carouselContainer.scrollLeft).toBeGreaterThan(initialScrollLeft);
  });
});
