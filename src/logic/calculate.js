import operate from './operate';

const calculate = (data, btnName) => {
  const {
    total,
    next,
    operation,
  } = data;

  switch (btnName) {
    case '+/-':
      return {
        total: operate(Number(total), Number(next), operation),
        next: String(total),
        operation,
      };
    case '%':
      return {
        total: operate(Number(total), Number(next), operation),
        next: String(total),
        operation: null,
      };
    case '=':
      return {
        total: operate(Number(total), Number(next), operation),
        next: String(total),
        operation: null,
      };
    case 'AC':
      return {
        total: 0,
        next: null,
        operation: null,
      };
    case '÷':
    case 'X':
    case '+':
    case '-':
      if (operation) {
        return {
          total: operate(Number(total), Number(next), operation),
          next: String(total),
          operation: btnName,
        };
      }
      return {
        total,
        next,
        operation: btnName,
      };

    default:
      return {
        total,
        next,
        operation,
      };
  }
};

export default calculate;
