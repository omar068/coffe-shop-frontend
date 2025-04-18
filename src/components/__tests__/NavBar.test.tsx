
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../NavBar';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

// Mocks
jest.mock('js-cookie', () => ({
  remove: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Navbar', () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    document.body.style.overflow = ''; // Reset before each test
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders menu and icons', () => {
    render(<Navbar />);
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument();
    expect(screen.getByAltText('Notifications icon')).toBeInTheDocument();
    expect(screen.getByAltText('User icon')).toBeInTheDocument();
  });

  it('opens and closes the menu when menu button is clicked', () => {
    render(<Navbar />);
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });

    fireEvent.click(menuButton);
    const sidebar = screen.getByText('Menu').parentElement?.parentElement;
    expect(sidebar).toHaveClass('translate-x-0');
    expect(document.body.style.overflow).toBe('hidden');

    fireEvent.click(menuButton);
    expect(sidebar).toHaveClass('-translate-x-full');
    expect(document.body.style.overflow).toBe('');
  });

  it('calls handleLogout on "Cerrar Sesión" click', () => {
    render(<Navbar />);
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(menuButton); // Open menu

    const logoutButton = screen.getByText(/cerrar sesión/i);
    fireEvent.click(logoutButton);

    expect(Cookies.remove).toHaveBeenCalledWith('authToken');
    expect(pushMock).toHaveBeenCalledWith('/login');
  });
});
