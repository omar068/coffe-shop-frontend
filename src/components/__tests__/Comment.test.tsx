import { render, screen } from '@testing-library/react';
import Comment from '../Comment';

describe('Comment Component', () => {
  const mockUser = 'Juan Pérez';
  const mockComment = 'This is a test comment.';

  beforeEach(() => {
    render(<Comment user={mockUser} comment={mockComment} />);
  });

  it('should display the user name', () => {
    expect(screen.getByText(mockUser)).toBeInTheDocument();
  });

  it('should display the comment text', () => {
    expect(screen.getByText(mockComment)).toBeInTheDocument();
  });

  it('should display the "Responder" text', () => {
    expect(screen.getByText('Responder')).toBeInTheDocument();
  });

  it('should render the avatar image with the correct alt attribute', () => {
    const image = screen.getByAltText('Image-avatar');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('https://'));
  });
});
