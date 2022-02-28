import React from 'react';
import { render, cleanup } from '@testing-library/react'; // we'll retrieve some functions from the React Testing Library
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// Now that we've imported the necessary functions to the test file, we'll configure the testing environment by adding a utility function to keep things clean
afterEach(cleanup);
// This will ensure that after each test, we won't have any leftover memory data that could give us false results.

describe('About component', () => {
     // First Test
  it('renders', () => {
    render(<About />);
  });

  // Second Test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    
    expect(asFragment()).toMatchSnapshot();
  });
})