import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessGrid from '../GuessGrid';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const handleGuess = (guess) => {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
  }
  return <>
    Put a game here!
    <GuessInput
      onGuess={handleGuess}
    />
    {/* <GuessList guesses={guesses} /> */}
    <GuessGrid guesses={guesses} answer={answer} />
  </>;
}

export default Game;
