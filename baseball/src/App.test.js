import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

// Difference between queryByText and getByText, getByText will fail the test if there's nothing on the DOM
// queryByText will return a null

describe('App Components', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('Baseball Dashboard for Strike Initial Values', () => {

    it('Strike Counter', () => {
      const { getByText, queryByText } = render(<App />);
      // find the button or thing you want
      const logStrike = getByText(/strike-count/i); //syntax for case insensitive

      // click it if it's a button
      // fireEvent.click(button);

      // Check Values
      expect(logStrike).toBeDefined();
      expect(logStrike).toBeTruthy();
      expect(logStrike.textContent).toBe("Strike-Count: 0");
    });

    it('Ball Counter', () => {
      const { getByText, queryByText } = render(<App />);
      const logBall = getByText(/ball-count/i);

      expect(logBall).toBeDefined();
      expect(logBall).toBeTruthy();
      expect(logBall.textContent).toBe("Ball-Count: 0");
    });

    it('Strike-Counter after Button Click', () => {
      const { getByText, queryByText } = render(<App />);
      const strikeButton = getByText(/strike/i);

      // click it if it's a button
      fireEvent.click(button);

      expect(strikeButton).toBeDefined();
      expect(strikeButton).toBeTruthy();
      expect(strikeButton.textContent).toBe("Strike");
    });

    



  });
})
