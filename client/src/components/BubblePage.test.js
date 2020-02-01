import React from 'react';
import {render, fireEvent, wait, getByText } from '@testing-library/react';
import { shallow } from 'enzyme';

import BubblePage from './BubblePage';
import App from '../App';
import Login from './Login';
import ColorList from './ColorList';

describe('BubblePage Component', () => {
    test('Loads <BubblePage />', () => {
        const { getByLabelText, getByRole,  getByTestId, getByText, toHaveTextContent } = render(<BubblePage />);
        getByText(/colors/i);

        expect(getByRole('button')).toHaveTextContent('click')
    })
})


  describe('Login Component', () => {
    it('finds Welcome text', () => {
        // const wrapper = shallow(<App />);
        // const text = wrapper.find('p').text();
        // expect(text).toEqual('hi');
        
        const wrapper = shallow(<Login />)
        const text = wrapper.find('h1').text();
        expect(text).toEqual('Welcome to the Bubble App!');
    });

//     it('add button clicked', () => {
//         const wrapper = shallow(<Login />)
//         // const text = wrapper.find('button').text();
//         expect(wrapper.matchesElement(<button>click</button>)).to.equal(true);

//     })
//   });

//   describe('Colors list Component', () => {
//       it('loads list component', () => {
//           const wrapper = shallow(<ColorList />)
          
//           const colorItem = wrapper.find('li')
//           expect(colorItem).toHaveLength(1)
//       })
  })

