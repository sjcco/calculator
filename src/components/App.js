import React, { useState } from 'react';

import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

const App = () => {
  const [memory, setMemory] = useState({
    total: null,
    next: null,
    // eslint-disable-next-line
    operation: null,
  });

  const handleClick = btnName => {
    setMemory(prevState => calculate(prevState, btnName));
  };

  const { next, total } = memory;
  return (
    <>
      <Display result={next || total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
