import { render, screen } from '@testing-library/react';
import ListItem from '../../../components/ListItem/ListItem';

describe('ListItem component tests', () => {
  test('ListItem renders item prop', () => {
    render(<ListItem item={10} />);
    const item = screen.getByText('10');
    expect(item).toBeInTheDocument();
  });

  test('ListItem renders boom if item is -1 (a boom number)', () => {
    render(<ListItem item={-1} />);
    const item = screen.getByRole('listitem');
    expect(item.innerHTML).toEqual('Boom');
  });
});
