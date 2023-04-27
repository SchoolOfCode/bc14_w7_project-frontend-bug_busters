import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { expect, test } from '@jest/globals';
import HeaderLogo from './HeaderLogo';




test.only("check if Calendar is on screen",  function() {
    render(<HeaderLogo/>);
    
    const Header = screen.getByRole('heading', {
        name: /school of code \- bootcamp 14 \- weekly schedule/i
      });

    expect(Header).toBeVisible();

    //screen.logTestingPlaygroundURL();

});