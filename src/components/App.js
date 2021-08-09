import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Calculator from './calculator';
import NavBar from './NavBar';
import Home from './Home';
import Quote from './Quote';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <div className="content-container">
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/quotes" component={Quote} />
    </div>
  </BrowserRouter>
);

export default App;
