import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessGrid({ guesses, answer }) {
  return <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((idx) => {
      return <Guess value={guesses[idx]} key={idx} answer={answer} />
    })}
    </div> 
}

export default GuessGrid;
