import React from 'react';
import { quotes } from '../quotes.json';

const Quote = () => {
  const { author, quote } = quotes[Math.floor(Math.random() * (quotes.length - 1))];
  return (
    <>
      <h1>Quote of the Day!</h1>
      <p>
        {quote}
      </p>
      <small>{`-${author}`}</small>
    </>
  );
};

export default Quote;
