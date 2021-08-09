import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [memory, setMemory] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = btnName => {
    setMemory(prevState => calculate(prevState, btnName));
  };

  const { next, total, operation } = memory;
  return (
    <div className="calc-container">
      <h1>Let&apos;s do some math!</h1>
      <div className="calculator skin">
        <Display result={next || total || '0'} operation={'' || operation} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
