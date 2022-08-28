import { render, screen } from '@testing-library/react';
import List from '../../../components/List/List';

describe('List component tests', () => {
  test('List renders list component', () => {
    render(<List sequence={[1, 2, 3]} />);
    const ul = screen.getByRole('list');
    expect(ul).toBeInTheDocument();
  });

  test('List renders sequence items without 7boom number', () => {
    render(<List sequence={[1, 2, 3]} />);
    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(3);
    expect(items[0].innerHTML).toEqual('1');
    expect(items[1].innerHTML).toEqual('2');
    expect(items[2].innerHTML).toEqual('3');
  });

  test('List renders sequence items with 7boom number', () => {
    render(<List sequence={[6, -1, 8]} />);
    const ul = screen.getByRole('list');
    expect(ul).toBeInTheDocument();
    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(3);
    expect(items[0].innerHTML).toEqual('6');
    expect(items[1].innerHTML).toEqual('Boom');
    expect(items[2].innerHTML).toEqual('8');
  });
});
