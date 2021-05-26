/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import DisplayContainer from '../client/components/DisplayContainer.jsx';

configure({ adapter: new Adapter() });

describe('Testing React Components', () => {
  describe('Display Container', () => {
    let wrapper;
    const props = {
      posterUrl: 'www.google.com/image',
      streams: [true, true, true],
    };

    beforeAll(() => {
      wrapper = shallow(<DisplayContainer {...props} />);
    });

    it('Renders a <div> tag with id of display-container', () => {
      expect(wrapper.type()).toEqual('div');
    });
  });
});
