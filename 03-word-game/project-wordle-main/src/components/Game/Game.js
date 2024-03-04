import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessGrid from '../GuessGrid';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // ['running', 'won', 'lost']
  const [gameStatus, setGameStatus] = React.useState('running')
  const [guesses, setGuesses] = React.useState([]);
  const handleGuess = (guess) => {
    const nextGuesses = [...guesses, guess]
    setGuesses(nextGuesses);
    if (guess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }
  return <>
    Put a game here!
    <GuessInput
      onGuess={handleGuess}
      gameStatus={gameStatus}
    />
    {/* <GuessList guesses={guesses} /> */}
    <GuessGrid guesses={guesses} answer={answer} />
    {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
    {gameStatus === 'lost' && <LostBanner answer={answer} />}
  </>;
}

export default Game;
