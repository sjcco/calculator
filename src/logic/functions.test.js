import calculate from './calculate';
import operate from './operate';

test('test sum on operate', () => {
  const result = operate(5, 3, '+');
  expect(String(result)).toStrictEqual('8');
});

test('test sum on calculate', () => {
  const data = {
    total: '3',
    next: '5',
    operation: '+',
  };
  const result = calculate(data, '+');
  expect(result.total).toBe('8');
});
