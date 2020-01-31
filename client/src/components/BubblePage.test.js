import React from 'react';
import {render, fireEvent, wait, getByText } from '@testing-library/react';
import { shallow } from 'enzyme';

import BubblePage from './BubblePage';
import App from '../App';
import Login from './Login';

describe('BubblePage Component', () => {
    test('Loads <BubblePage />', () => {
        const { getByLabelText, getByText } = render(<BubblePage />);
        getByText(/colors/i);
    })
})


  describe('Login Component', () => {
    it('finds Welcome text', () => {
        // const wrapper = shallow(<App />);
        // const text = wrapper.find('p').text();
        // expect(text).toEqual('hi');
        
        const newWrapper = shallow(<Login />)
        const text = newWrapper.find('h1').text();
        expect(text).toEqual('Welcome to the Bubble App!');
    });
  });