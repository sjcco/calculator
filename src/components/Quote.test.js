import React from 'react';
import { render } from '@testing-library/react';
import Quote from './Quote';

test('renders component', () => {
  const component = render(<Quote />);
  component.getByText('Quote of the Day!');
});

test('Quote is a p element with a small element for author', () => {
  const component = render(<Quote />);
  const p = component.container.querySelector('p');
  const small = component.container.querySelector('small');
  expect(p.TEXT_NODE).toBeTruthy();
  expect(small.TEXT_NODE).toBeTruthy();
});
