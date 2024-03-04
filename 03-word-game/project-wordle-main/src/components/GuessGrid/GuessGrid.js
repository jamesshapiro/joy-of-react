import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessGrid({ guesses, answer }) {
  return <div className="guess-results">
    {guesses.map((guess, index) => {
      return <Guess value={guess} key={index} answer={answer} />
    })}
    {range(guesses.length,NUM_OF_GUESSES_ALLOWED).map((idx) => {
      return <Guess key={idx} />
    })}
    </div> 
}

export default GuessGrid;
