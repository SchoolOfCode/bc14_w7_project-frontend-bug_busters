import {userEvent, render, screen, waitFor, fireEvent } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import App from './App';


test.only("Modal should appear when day header button is clicked.", async function() {
  render(<App />);
  
  const btn = screen.getByRole('button', {
    name: /Monday 24 \/ 4 resources/i
  });

  await waitFor(() => {
    expect(btn).toBeVisible();
  });

  fireEvent.click(btn);

  await waitFor(() => {
    expect(screen.getByTestId('modalBackground')).toBeInTheDocument();
  });
});


