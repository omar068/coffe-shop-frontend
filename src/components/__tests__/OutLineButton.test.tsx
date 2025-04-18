import { render, screen, fireEvent } from '@testing-library/react';
import OutLineButton from '../OutLineButton';

describe('OutLineButton', () => {
  it('renders with correct children text', () => {
    render(<OutLineButton children="Click Me" bg="bg-blue-500" />);
    expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument();
  });

  it('applies the background class correctly', () => {
    render(<OutLineButton children="Styled" bg="bg-green-500" />);
    const button = screen.getByRole('button', { name: 'Styled' });
    expect(button).toHaveClass('bg-green-500');
  });

  it('calls onClick when button is clicked', () => {
    const handleClick = jest.fn();
    render(<OutLineButton children="Press" bg="bg-red-500" onClick={handleClick} />);
    const button = screen.getByRole('button', { name: 'Press' });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
