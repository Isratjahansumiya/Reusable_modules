import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicButton } from './button.composition';
import { Button } from './button';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicButton />);
  const rendered = getByText('Default');
  expect(rendered).toBeTruthy();
});
test('renders a button with the primary color', () => {
  render(<Button color="primary">Hello</Button>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toHaveClass('primary');
})
