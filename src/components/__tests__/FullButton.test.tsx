// src/components/__tests__/FullButton.test.tsx
import { render, screen } from '@testing-library/react';
import FullButton from '../FullButton';

describe('FullButton', () => {
  it('renders with the correct content', () => {
    render(<FullButton content="Click me" />);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('renders with the default class styles', () => {
    render(<FullButton content="Test Button" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gradient-to-r from-[#3540E8] to-[#E41AD6] text-white rounded-lg');
  });

  it('adds extra padding when className is "button-card"', () => {
    render(<FullButton content="With Padding" className="button-card" />);
    const container = screen.getByText('With Padding').parentElement;
    expect(container).toHaveClass('px-6 py-4');
  });

  it('does not add extra padding when className is not "button-card"', () => {
    render(<FullButton content="No Padding" className="another-class" />);
    const container = screen.getByText('No Padding').parentElement;
    expect(container).toHaveClass('py-4');
    expect(container).not.toHaveClass('px-6');
  });
});
