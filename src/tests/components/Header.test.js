import React from 'react';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
// import ReactShallowReander from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  // const renderer = new ReactShallowReander();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();

  const wrapper = shallow(<Header />);
  // expect(wrapper.find('h1').text()).toBe("Expensify");
  // expect(toJSON(wrapper)).toMatchSnapshot();
  expect(wrapper).toMatchSnapshot();
});