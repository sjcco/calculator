import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from './ButtonPanel';

test('render page correctly', () => {
  const mockHandler = jest.fn();
  const component = renderer.create(<ButtonPanel clickHandler={mockHandler} />).toJSON();
  expect(component).toMatchSnapshot();
});
