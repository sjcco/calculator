import calculate from './calculate';
import operate from './operate';

describe('test sum', () => {
  test('on operate positive result', () => {
    const result = operate(5, 3, '+');
    expect(String(result)).toStrictEqual('8');
  });

  test('on calculate positive result', () => {
    const data = {
      total: '3',
      next: '5',
      operation: '+',
    };
    const result = calculate(data, '+');
    expect(result.total).toBe('8');
  });

  test('on operate negative result', () => {
    const result = operate(5, 3, '+');
    expect(String(result)).not.toStrictEqual('7');
  });

  test('on calculate negative result', () => {
    const data = {
      total: '3',
      next: '5',
      operation: '+',
    };
    const result = calculate(data, '+');
    expect(result.total).not.toBe('7');
  });
});

describe('test substraction', () => {
  test('on operate positive result', () => {
    const result = operate(5, 3, '-');
    expect(String(result)).toStrictEqual('2');
  });

  test('on calculate positive result', () => {
    const data = {
      total: '5',
      next: '5',
      operation: '-',
    };
    const result = calculate(data, '-');
    expect(result.total).toBe('0');
  });

  test('on operate negative result', () => {
    const result = operate(5, 3, '-');
    expect(String(result)).not.toStrictEqual('7');
  });

  test('on calculate negative result', () => {
    const data = {
      total: '3',
      next: '5',
      operation: '-',
    };
    const result = calculate(data, '-');
    expect(result.total).not.toBe('7');
  });
});

describe('test multiplication', () => {
  test('on operate positive result', () => {
    const result = operate(5, 3, 'x');
    expect(String(result)).toStrictEqual('15');
  });

  test('on calculate positive result', () => {
    const data = {
      total: '5',
      next: '5',
      operation: 'x',
    };
    const result = calculate(data, 'x');
    expect(result.total).toBe('25');
  });

  test('on operate negative result', () => {
    const result = operate(5, 3, 'x');
    expect(String(result)).not.toStrictEqual('7');
  });

  test('on calculate negative result', () => {
    const data = {
      total: '3',
      next: '5',
      operation: 'x',
    };
    const result = calculate(data, 'x');
    expect(result.total).not.toBe('7');
  });
});

describe('test division', () => {
  test('on operate positive result', () => {
    const result = operate(6, 3, '÷');
    expect(String(result)).toStrictEqual('2');
  });

  test('on calculate positive result', () => {
    const data = {
      total: '5',
      next: '5',
      operation: '÷',
    };
    const result = calculate(data, '÷');
    expect(result.total).toBe('1');
  });

  test('on operate negative result', () => {
    const result = operate(5, 3, '÷');
    expect(String(result)).not.toStrictEqual('7');
  });

  test('on calculate negative result', () => {
    const data = {
      total: '3',
      next: '5',
      operation: '÷',
    };
    const result = calculate(data, '÷');
    expect(result.total).not.toBe('7');
  });
});

describe('test division', () => {
  test('on operate positive result', () => {
    const result = operate(6, 3, '÷');
    expect(String(result)).toStrictEqual('2');
  });

  test('on calculate positive result', () => {
    const data = {
      total: '5',
      next: '5',
      operation: '÷',
    };
    const result = calculate(data, '÷');
    expect(result.total).toBe('1');
  });

  test('on operate negative result', () => {
    const result = operate(5, 3, '÷');
    expect(String(result)).not.toStrictEqual('7');
  });

  test('on calculate negative result', () => {
    const data = {
      total: '3',
      next: '5',
      operation: '÷',
    };
    const result = calculate(data, '÷');
    expect(result.total).not.toBe('7');
  });
});

describe('test percentage', () => {
  test('on operate positive result', () => {
    const result = operate(100, 0, '%');
    expect(String(result)).toStrictEqual('1');
  });

  test('on calculate positive result', () => {
    const data = {
      total: '100',
      next: '100',
      operation: '%',
    };
    const result = calculate(data, '%');
    expect(result.next).toBe('1');
  });

  test('on operate negative result', () => {
    const result = operate(5, 3, '%');
    expect(String(result)).not.toStrictEqual('7');
  });

  test('on calculate negative result', () => {
    const data = {
      total: '3',
      next: '5',
      operation: '÷',
    };
    const result = calculate(data, '%');
    expect(result.total).not.toBe('7');
  });
});

describe('test invert sign', () => {
  test('on operate positive result', () => {
    const result = operate(100, 0, '+/-');
    expect(String(result)).toStrictEqual('-100');
  });

  test('on calculate positive result', () => {
    const data = {
      total: '100',
      next: '1',
      operation: '%',
    };
    const result = calculate(data, '+/-');
    expect(result.next).toBe('-1');
  });

  test('on operate negative result', () => {
    const result = operate(-5, 3, '+/-');
    expect(String(result)).not.toStrictEqual('-5');
  });

  test('on calculate negative result', () => {
    const data = {
      total: '3',
      next: '5',
      operation: '÷',
    };
    const result = calculate(data, '+/-');
    expect(result.total).not.toBe('7');
  });
});

describe('test AC', () => {
  test('on calculate positive result', () => {
    const data = {
      total: '100',
      next: '1',
      operation: '%',
    };
    const result = calculate(data, 'AC');
    expect(result.total).toBe('0');
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  });

  test('on calculate negative result', () => {
    const data = {
      total: '3',
      next: '5',
      operation: '÷',
    };
    const result = calculate(data, 'AC');
    expect(result.total).not.toBe('1');
    expect(result.next).toBeFalsy();
    expect(result.operation).toBeFalsy();
  });
});

describe('test . button', () => {
  test('on calculate positive result', () => {
    const data = {
      total: '100',
      next: '1',
      operation: '+',
    };
    const result = calculate(data, '.');
    expect(result.total).toBe('100');
    expect(result.next.match(/^[^.]+\.$/)).toBeTruthy();
    expect(result.operation).toBe('+');
  });

  test('on calculate negative result', () => {
    const data = {
      total: '3',
      next: '5.',
      operation: '÷',
    };
    const result = calculate(data, '.');
    expect(result.next.match(/^[^.]+\..$/)).toBeFalsy();
  });
});

describe('test =', () => {
  test('on calculate positive result', () => {
    const data = {
      total: '100',
      next: '1',
      operation: '+',
    };
    const result = calculate(data, '=');
    expect(result.total).toBe('1');
    expect(result.next).toBe('101');
    expect(result.operation).toBe(null);
  });

  test('on calculate negative result', () => {
    const data = {
      total: '3',
      next: '5',
      operation: '÷',
    };
    const result = calculate(data, '=');
    expect(result.total).not.toBe('1');
    expect(result.next).not.toBe('0');
    expect(result.operation).toBeFalsy();
  });
});
