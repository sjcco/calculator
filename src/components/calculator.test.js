import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { render, within } from '@testing-library/react';
import Calculator from './calculator';

test('should render page correctly', () => {
  const calc = renderer.create(<Calculator />).toJSON();
  expect(calc).toMatchSnapshot();
});

test('renders component', () => {
  const component = render(<Calculator />);
  component.getByText("Let's do some math!");
});

test('Renders all buttons in calculator', () => {
  render(<Calculator />);
  const buttons = within(document.querySelector('.button-panel')).getAllByRole('button');
  expect(buttons).toHaveLength(19);
});
