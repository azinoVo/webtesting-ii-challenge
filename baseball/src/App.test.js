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

    it('Find Strike Button, then Strike-Counter after Button Clicks', () => {
      const { getByText } = render(<App />);
      const strikeButton = getByText(/increment strike/i);

      expect(strikeButton).toBeDefined();
      expect(strikeButton).toBeTruthy();
      expect(strikeButton.textContent).toBe("Increment Strike");


      const logStrike = getByText(/strike-count/i); //syntax for case insensitive
      expect(logStrike).toBeDefined();
      expect(logStrike).toBeTruthy();
      fireEvent.click(strikeButton);
      expect(logStrike.textContent).toBe("Strike-Count: 1");

      fireEvent.click(strikeButton);
      expect(logStrike.textContent).toBe("Strike-Count: 2");

      fireEvent.click(strikeButton);
      expect(logStrike.textContent).toBe("Strike-Count: 0");

    });

    it('Find Ball Button, then Ball-Counter after Button Clicks', () => {
      const { getByText } = render(<App />);
      const BallButton = getByText(/increment ball/i);

      expect(BallButton).toBeDefined();
      expect(BallButton).toBeTruthy();
      expect(BallButton.textContent).toBe("Increment Ball");


      const logBall = getByText(/ball-count/i);
      expect(logBall).toBeDefined();
      expect(logBall).toBeTruthy();
      fireEvent.click(BallButton);
      expect(logBall.textContent).toBe("Ball-Count: 1");

      fireEvent.click(BallButton);
      expect(logBall.textContent).toBe("Ball-Count: 2");

      fireEvent.click(BallButton);
      expect(logBall.textContent).toBe("Ball-Count: 3");

      fireEvent.click(BallButton);
      expect(logBall.textContent).toBe("Ball-Count: 0");
    });

    it('Find Foul Button, then Strike-Counter after Button Clicks', () => {
      const { getByText } = render(<App />);
      const foulButton = getByText(/foul/i);

      expect(foulButton).toBeDefined();
      expect(foulButton).toBeTruthy();
      expect(foulButton.textContent).toBe("Foul");


      const logStrike = getByText(/strike-count/i); //syntax for case insensitive
      expect(logStrike).toBeDefined();
      expect(logStrike).toBeTruthy();
      fireEvent.click(foulButton);
      expect(logStrike.textContent).toBe("Strike-Count: 1");

      fireEvent.click(foulButton);
      expect(logStrike.textContent).toBe("Strike-Count: 2");

      fireEvent.click(foulButton);
      expect(logStrike.textContent).toBe("Strike-Count: 2");

    });

    it('Find Hit Button, then Strike-Counter and Ball-Counter after Button Clicks', () => {
      const { getByText } = render(<App />);
      const hitButton = getByText(/hit/i);
      const BallButton = getByText(/increment ball/i);
      const strikeButton = getByText(/increment strike/i);

      expect(hitButton).toBeDefined();
      expect(hitButton).toBeTruthy();
      expect(hitButton.textContent).toBe("Hit");

      const logStrike = getByText(/strike-count/i);
      expect(logStrike).toBeDefined();
      expect(logStrike).toBeTruthy();

      const logBall = getByText(/ball-count/i);
      expect(logBall).toBeDefined();
      expect(logBall).toBeTruthy();

      fireEvent.click(strikeButton);
      expect(logStrike.textContent).toBe("Strike-Count: 1");
      fireEvent.click(BallButton);
      expect(logBall.textContent).toBe("Ball-Count: 1");
      fireEvent.click(hitButton);
      expect(logStrike.textContent).toBe("Strike-Count: 0");
      expect(logBall.textContent).toBe("Ball-Count: 0");


    });

  });
})
