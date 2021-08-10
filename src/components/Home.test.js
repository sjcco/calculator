import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

test('render page correctly', () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});
