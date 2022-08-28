import { render, screen } from '@testing-library/react';
import Label from '../../../components/Label/Label';

describe('Label component tests', () => {
  test('Label renders current prop', () => {
    render(<Label current={10} />);
    const label = screen.getByText('10');
    expect(label).toBeInTheDocument();
  });
});
