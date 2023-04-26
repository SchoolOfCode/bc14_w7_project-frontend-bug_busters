import {fireEvent,render, screen } from '@testing-library/react';
import App from './App';

test('button renders pop up after button click', () => {
  render(<App />);

  const btn = screen.getAllByRole('button', { class : "day-header-button" })[2]; 
  //const modalBackground = screen.getByTestId('modalBackground');

  fireEvent.click(btn);

  expect(screen.getByTestId('modalBackground')).toBeInTheDocument();
});
