import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../../../components/Button/Button';

describe('Button component tests', () => {
  test('Button renders', () => {
    render(<Button onClick={jest.fn()} />);
    const button = screen.getByRole('button', { name: 'Increase' });
    expect(button).toBeInTheDocument();
  });

  test('Button executes callback when clicked', () => {
    const cb = jest.fn();
    render(<Button onClick={cb} />);
    const button = screen.getByRole('button', { name: 'Increase' });
    userEvent.click(button);
    expect(cb).toHaveBeenCalledTimes(1);
  });
});
