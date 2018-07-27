import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
  const display = (props.hasWon) ? 'hidden' : 'guessForm';
  return (
    <form 
      onSubmit={ e => props.onSubmit(e)}
      className={display}
      >
      <input
        type="text"
        name="userGuess"
        id="userGuess"
        title="Enter your Guess"
        className="text"
        maxLength="3"
        autoComplete="off"
        placeholder="Enter your Guess"
        required
      />
      <input
        type="submit"
        id="guessButton"
        className="button"
        name="submit"
        value="Guess"
      />
    </form>
  );
}

