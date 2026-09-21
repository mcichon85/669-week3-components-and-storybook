import { fireEvent, render, screen } from '@testing-library/react';
import { Button, Header, Input, List } from '../index';

describe('component library', () => {
  it('renders button variants and handles presses', () => {
    const onPress = vi.fn();
    render(<Button variant="danger" onPress={onPress}>Delete</Button>);
    fireEvent.click(screen.getByRole('button', { name: 'Delete' }));
    expect(onPress).toHaveBeenCalledOnce();
  });

  it('renders authenticated and unauthenticated headers', () => {
    const { rerender } = render(<Header siteName="Northstar" />);
    expect(screen.getByText('Sign in')).toBeInTheDocument();
    rerender(<Header siteName="Northstar" loggedIn userName="Sam" />);
    expect(screen.getByText('Hi, Sam')).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('associates labels with inputs and displays errors', () => {
    render(<Input label="Email address" error="Enter a valid email address." />);
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByText('Enter a valid email address.')).toBeInTheDocument();
  });

  it('renders list items and an empty state', () => {
    const { rerender } = render(<List items={[{ id: '1', title: 'Design system', description: 'Updated today' }]} variant="bordered" />);
    expect(screen.getByText('Design system')).toBeInTheDocument();
    rerender(<List items={[]} emptyMessage="Nothing here yet." />);
    expect(screen.getByText('Nothing here yet.')).toBeInTheDocument();
  });
});
