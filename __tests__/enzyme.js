/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable linebreak-style */
import React from 'react';
import {
  configure, shallow, mount, render,
} from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import RealAdapter from 'enzyme-adapter-react-16';

// import statements for react components
import StreamSelect from '../client/components/StreamSelect';

// configure adapter
configure({ adapter: new RealAdapter() });

// https://jestjs.io/docs/mock-functions
describe('React unit tests', () => {
  describe('StreamSelect', () => {
    let wrapper;
    const mock = jest.fn();

    const props = {
      streamPrefs: [0, 1, 2],
      onStreamChange: mock,
    };
    // real streamPrefs looks like this: [ amazon: false, hulu: false, netflix: false} ]

    // beforeAll make a wrapper
    // shallow
    beforeAll(() => {
      wrapper = shallow(<StreamSelect {...props} />);
      return wrapper;
    });

    it('renders a <div> tag with id of "stream-checkbox-container"', () => {
      expect(wrapper.type()).toEqual('div');
    });
    it('it should render three divs with class of "stream-checkbox"', () => {
      expect(wrapper.find('#stream-checkbox-container').children('.stream-checkbox')).toHaveLength(3);
    });
    it('', () => {
      expect(wrapper.type()).toEqual('div');
    });
  });
});
