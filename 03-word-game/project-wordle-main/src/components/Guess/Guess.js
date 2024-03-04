import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const styles = value && checkGuess(value, answer)
  return <p className="guess">
    {range(5).map((idx) => {
      const classes = styles ? `cell ${styles[idx]['status']}` : 'cell'
      return <span className={classes} key={idx} >{value && value[idx]}</span>;
    })}   
  </p>;
}

export default Guess;
