import {fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import Modal from '../Modal/Modal';
import App from './App';



test("Modal should appear when Monday header button is clicked", async function() {
  render(<App />);

  fireEvent.click(screen.getAllByRole('button', { class : "day-header-button" })[2]);

  let dummyData = [{}];

  render(<Modal filteredData={dummyData} setModalToggle={jest.fn}/>);

  const actual = screen.getByTestId('modalBackground');

  expect(actual).toBeInTheDocument();
}); 