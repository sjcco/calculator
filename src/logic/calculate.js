import operate from './operate';

const calculate = (data, btnName) => {
  const {
    total,
    next,
    operation,
  } = data;
  let value;
  switch (btnName) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':

      if (next) {
        if (next === '0') {
          value = btnName;
        } else {
          value = next + btnName;
        }
      } else {
        value = btnName;
      }
      return {
        total: total || '0',
        next: value,
        operation,
      };

    case '.':
      if (next) {
        if (next.includes('.')) {
          value = next;
        } else {
          value = `${next}.`;
        }
      } else {
        value = '0.';
      }
      return {
        total,
        next: value,
        operation,
      };
    case '+/-':
      return {
        total,
        next: String(operate(Number(next), Number(total), '+/-')),
        operation,
      };
    case '%':
      return {
        total,
        next: String(operate(Number(next), Number(total), '%')),
        operation,
      };
    case '=':
      if (operation) {
        return {
          total: next,
          next: String(operate(Number(total), Number(next), operation)),
          operation: null,
        };
      }
      return {
        total: next,
        next,
        operation: null,
      };
    case 'AC':
      return {
        total: '0',
        next: null,
        operation: null,
      };
    case '÷':
    case 'x':
    case '+':
    case '-':
      if (operation) {
        return {
          total: String(operate(Number(total), Number(next), operation)),
          next: null,
          operation: btnName,
        };
      }
      return {
        total: next,
        next: null,
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
