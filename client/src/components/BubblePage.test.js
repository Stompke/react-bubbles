import React from 'react';
import {render, fireEvent, wait, getByText } from '@testing-library/react';

import BubblePage from './BubblePage';


test('this is my first test', () => {


    const { getByLabelText, getByText } = render(<BubblePage />);

    getByText(/colors/i);


})

describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
      expect(2 + 2).toBe(4);
    });
  });