import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const operand1 = Big(numberOne);
  const operand2 = Big(numberTwo);

  switch (operation) {
    case '+/-':
      return operand1.times(Big(-1));
    case '+':
      return operand1.plus(operand2);
    case '-':
      return operand1.minus(operand2);
    case 'X':
      return operand1.times(operand2);
    case '÷':
      return operand1.div(operand2);
    case '%':
      return operand1.div(100);
    default:
      return '0';
  }
};

export default operate;
