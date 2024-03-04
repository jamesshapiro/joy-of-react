import React from 'react';

function GuessInput({ onGuess, gameStatus }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setGuess('');
    onGuess(guess);
  }
  return <form 
    onSubmit={handleSubmit}
    className="guess-input-wrapper">
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
      required
      id="guess-input" 
      type="text"
      disabled={gameStatus !== 'running'}
      value={guess}
      onChange={event => {
        const nextGuess = event.target.value.toUpperCase()
        setGuess(nextGuess);
      }}
      pattern="[A-Za-z]{5}"
    />
  </form>
}

export default GuessInput;
