import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { expect, test } from '@jest/globals';
import Calendar from './Calendar';




test("check if Calendar body is on screen",  function() {
    let dummyData = [{}];
    render(<Calendar dummyData={dummyData}/>);
    
    const calendarBody = screen.getByLabelText(/apr 23 – 29, 2023/i);

    expect(calendarBody).toBeInTheDocument();

});