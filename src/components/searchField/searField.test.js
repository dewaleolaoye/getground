import { render, screen } from '@testing-library/react';
import SearchField from './searchField';

test('renders App without breaking', () => {
  render(<SearchField />);
  screen.getByLabelText('Search Books');

  const labelEl = screen.getByLabelText('Search Books');
  expect(labelEl).toBeInTheDocument();
  expect(labelEl).toHaveAttribute('type', 'text');
});
