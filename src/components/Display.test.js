import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';

test('render page correctly', () => {
  const component = renderer.create(<Display />).toJSON();
  expect(component).toMatchSnapshot();
});
