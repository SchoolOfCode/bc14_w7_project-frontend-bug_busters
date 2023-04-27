import {fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import Modal from '../Modal/Modal';
import App from './App';

/*

test("Modal should appear when Monday header button is clicked", async function() {
  render(<App />);

  fireEvent.click(screen.getAllByRole('button', { class : "day-header-button" })[2]);

  let dummyData = [{}];

  //render(<Modal filteredData={dummyData} setModalToggle={jest.fn}/>);

  const actual = screen.getByTestId('modalBackground');

<<<<<<< HEAD
  await waitFor(() => {
    expect(actual).toBeInTheDocument();
    // expect(screen.getByTestId('modalBackground')).toBeInTheDocument();
  }
  // expect(screen.getByTestId('modalBackground')).toBeInTheDocument();
)});

test.only("Modal should appear when day header button is clicked.", async function() {
  render(<App />);  
  //const btn = await screen.findByRole('button', { name: /monday/i});
  screen.logTestingPlaygroundURL();

});
*/
=======
  expect(actual).toBeInTheDocument();
}); 
>>>>>>> 6a21bde5893a2e2b95cb90a7d9f31cf0829ad219
