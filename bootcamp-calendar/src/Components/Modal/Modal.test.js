import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { expect, test } from '@jest/globals';
import Modal from '../Modal/Modal';
import Calendar from '../Calendar/Calendar';



test("check if 'X' button works", async function() {
  let dummyData = [{}];
  render(<Modal filteredData={dummyData} setModalToggle={jest.fn}/>);


  const cancelBtn = screen.queryByRole('button', {name: /x/i});
  //const workshopRepoLink = screen.getByText(/workshop repository links/i);

  await userEvent.click(cancelBtn);

  await waitFor(() => {

    expect(cancelBtn).not.toBeVisible();
  })

  //screen.logTestingPlaygroundURL();
});


test("check if 'X' button works 2", async function() {
    render(Calendar);
  
  
    const cancelBtn = screen.queryByRole('button', {name: /x/i});
    //const workshopRepoLink = screen.getByText(/workshop repository links/i);
  
    await userEvent.click(cancelBtn);
  
    await waitFor(() => {
  
      expect(cancelBtn).not.toBeVisible();
    })
  
    //screen.logTestingPlaygroundURL();
  });

  