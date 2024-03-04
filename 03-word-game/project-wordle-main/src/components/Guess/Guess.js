import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell( {letter, status} ) {
  const classes = status ? `cell ${status}` : 'cell'
  return <span className={classes}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer)
  return <p className="guess">
    {range(5).map((idx) => {
      return <Cell 
        key={idx}
        letter={result ? result[idx].letter : undefined}
        status={result ? result[idx].status : undefined}
      />
      
    })}   
  </p>;
}

export default Guess;
