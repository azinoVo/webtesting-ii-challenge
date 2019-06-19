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

  describe('Baseball Buttons', () => {

    it('Record the Strike Button Counter', () => {
      const { getByText, queryByText } = render(<App />);
      // find the button
      const button = getByText(/strike/i); //syntax for case insensitive

      // click it
      fireEvent.click(button);

      // Check Values
      expect(queryByText(/hello developers/i)).toBeTruthy();
    });
  });
})
