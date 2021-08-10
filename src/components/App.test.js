import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('render page correctly', () => {
  const component = renderer.create(<App />).toJSON();
  expect(component).toMatchSnapshot();
});
