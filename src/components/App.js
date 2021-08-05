import React from 'react';
import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      // eslint-disable-next-line
      operation: null,
    };

    this.handleClick = btnName => {
      this.setState(prevState => calculate(prevState, btnName));
    };
  }

  render() {
    const { next, total } = this.state;
    return (
      <>
        <Display result={next || total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
