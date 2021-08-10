import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

test('Element renders correctly', () => {
  const mockHandler = jest.fn();
  const component = renderer.create(<Button wide={false} btnColor="bg-gray" name="7" clickHandler={mockHandler} />).toJSON();
  expect(component).toMatchSnapshot();
});

test('buttons fire events', () => {
  const mockHandler = jest.fn();
  render(<Button wide={false} btnColor="bg-gray" name="7" clickHandler={mockHandler} />);
  fireEvent.click(screen.getByText(/7/));
  expect(mockHandler).toHaveBeenCalledTimes(1);
});
