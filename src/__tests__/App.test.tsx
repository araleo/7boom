import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App tests', () => {
  test('App component renders', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Increase' });
    const texts = screen.queryAllByText('1');
    const label = texts[0];
    const list = screen.queryAllByRole('listitem');
    const listItem = list[0].innerHTML;
    expect(button).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(list).toHaveLength(1);
    expect(listItem).toEqual('1');
  });

  test('Clicking increase button changes the label', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Increase' });
    const texts = screen.queryAllByText('1');
    const label = texts[0];
    userEvent.click(button);
    expect(label.innerHTML).toEqual('2');
    userEvent.click(button);
    expect(label.innerHTML).toEqual('3');
  });

  test('Clicking increase button adds the next number to the sequence list', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Increase' });
    let list = screen.queryAllByRole('listitem');
    expect(list).toHaveLength(1);
    expect(list[0].innerHTML).toEqual('1');
    userEvent.click(button);
    list = screen.queryAllByRole('listitem');
    expect(list).toHaveLength(2);
    expect(list[1].innerHTML).toEqual('2');
  });

  test('Clicking increase button adds the next number to the sequence list with 7boom number', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Increase' });
    let list: HTMLElement[];

    for (let i = 0; i < 15; i++) {
      list = screen.queryAllByRole('listitem');
      let item = list[i].innerHTML;
      let expected = +item % 7 === 0 ? 'Boom' : item.toString();
      expect(list).toHaveLength(i + 1);
      expect(item).toEqual(expected);
      userEvent.click(button);
    }
  });
});
