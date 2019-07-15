import React from 'react';
import ReactShallowReander from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const renderer = new ReactShallowReander();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});