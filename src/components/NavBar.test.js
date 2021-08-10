import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from './NavBar';

test('render page correctly', () => {
  const component = renderer.create(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  ).toJSON();
  expect(component).toMatchSnapshot();
});
