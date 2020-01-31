import React from 'react';
import {render, fireEvent, wait, getByText } from '@testing-library/react';
import { shallow } from 'enzyme';

import BubblePage from './BubblePage';
import App from '../App';


test('this is my first test', () => {


    const { getByLabelText, getByText } = render(<BubblePage />);

    getByText(/colors/i);


})

describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
      expect(2 + 2).toBe(4);
    });
  });

  describe('App component', () => {
    it('finds hi', () => {
      const wrapper = shallow(<App />);
      const text = wrapper.find('p').text();
      expect(text).toEqual('hi');
    });
  });